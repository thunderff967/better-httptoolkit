"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runHTK = void 0;
const tslib_1 = require("tslib");
const path = tslib_1.__importStar(require("path"));
const fs = tslib_1.__importStar(require("fs"));
const env_paths_1 = tslib_1.__importDefault(require("env-paths"));
const async_mutex_1 = require("async-mutex");
const util_1 = require("@httptoolkit/util");
const mockttp_1 = require("mockttp");
const mockttp_pluggable_admin_1 = require("mockttp/dist/pluggable-admin-api/mockttp-pluggable-admin");
const mockrtc_1 = require("mockrtc");
const update_1 = tslib_1.__importDefault(require("@oclif/plugin-update/lib/commands/update"));
const api_server_1 = require("./api/api-server");
const browsers_1 = require("./browsers");
const error_tracking_1 = require("./error-tracking");
const constants_1 = require("./constants");
const fs_1 = require("./util/fs");
const shutdown_1 = require("./shutdown");
const certificates_1 = require("./certificates");
const docker_interception_services_1 = require("./interceptors/docker/docker-interception-services");
const webextension_1 = require("./webextension");
const http_client_1 = require("./client/http-client");
async function generateHTTPSConfig(configPath) {
    const keyPath = path.join(configPath, 'ca.key');
    const certPath = path.join(configPath, 'ca.pem');
    const [certContent] = await Promise.all([
        (0, fs_1.readFile)(certPath, 'utf8').then((certContent) => {
            checkCertExpiry(certContent);
            return certContent;
        }),
        (0, fs_1.checkAccess)(keyPath, fs.constants.R_OK),
    ]).catch(async () => {
        // Cert doesn't exist, or is too close/past expiry. Generate a new one:
        const newCertPair = await (0, mockttp_1.generateCACertificate)({
            subject: {
                commonName: 'HTTP Toolkit CA',
                organizationName: 'HTTP Toolkit CA'
            }
        });
        return Promise.all([
            (0, fs_1.writeFile)(certPath, newCertPair.cert).then(() => newCertPair.cert),
            (0, fs_1.writeFile)(keyPath, newCertPair.key, {
                mode: 0o600 // Only readable for ourselves, nobody else
            })
        ]);
    });
    return {
        keyPath,
        certPath,
        certContent,
        keyLength: 2048 // Reasonably secure keys please
    };
}
function checkCertExpiry(certContents) {
    const remainingLifetime = (0, certificates_1.getTimeToCertExpiry)((0, certificates_1.parseCert)(certContents));
    if (remainingLifetime < 1000 * 60 * 60 * 48) { // Next two days
        console.warn('Certificate expires soon - it must be regenerated');
        throw new Error('Certificate regeneration required');
    }
}
let shutdownTimer;
function manageBackgroundServices(standalone, httpsConfig, mockttpPort) {
    let activeSessions = 0;
    standalone.on('mock-session-started', async ({ http, webrtc }, sessionId) => {
        activeSessions += 1;
        if (shutdownTimer) {
            clearTimeout(shutdownTimer);
            shutdownTimer = undefined;
        }
        const httpProxyPort = http.getMockServer().port;
        console.log(`Mock session started, http on port ${httpProxyPort}, webrtc ${!!webrtc ? 'enabled' : 'disabled'}`);
        (0, docker_interception_services_1.startDockerInterceptionServices)(httpProxyPort, httpsConfig, ruleParameters)
            .catch((error) => {
            console.log("Could not start Docker components:", error);
        });
        (0, webextension_1.updateWebExtensionConfig)(sessionId, httpProxyPort, !!webrtc, mockttpPort)
            .catch((error) => {
            console.log("Could not update WebRTC config:", error);
        });
    });
    standalone.on('mock-session-stopping', ({ http }) => {
        activeSessions -= 1;
        const httpProxyPort = http.getMockServer().port;
        (0, docker_interception_services_1.stopDockerInterceptionServices)(httpProxyPort, ruleParameters)
            .catch((error) => {
            console.log("Could not stop Docker components:", error);
        });
        (0, webextension_1.clearWebExtensionConfig)(httpProxyPort);
        // In some odd cases, the server can end up running even though all UIs & desktop have exited
        // completely. This can be problematic, as it leaves the server holding ports that HTTP Toolkit
        // needs, and blocks future startups. To avoid this, if no Mock sessions are running at all
        // for 10 minutes, the server shuts down automatically. Skipped for dev, where that might be OK.
        // This should catch even hard desktop shell crashes, as sessions shut down automatically if the
        // client websocket becomes non-responsive.
        // We skip this on Mac, where apps don't generally close when the last window closes.
        if (activeSessions <= 0 && constants_1.IS_PROD_BUILD && process.platform !== 'darwin') {
            if (shutdownTimer) {
                clearTimeout(shutdownTimer);
                shutdownTimer = undefined;
            }
            // We do a two-step timer here: 1 minute then a logged warning, then 9 more minutes
            // until an automatic server shutdown:
            shutdownTimer = setTimeout(() => {
                if (activeSessions !== 0)
                    return;
                console.log('Server is inactive, preparing for auto-shutdown...');
                shutdownTimer = setTimeout(() => {
                    if (activeSessions !== 0)
                        return;
                    (0, shutdown_1.shutdown)(99, '10 minutes inactive');
                }, 1000 * 60 * 9).unref();
            }, 1000 * 60 * 1).unref();
        }
    });
}
// A map of rule parameters, which may be referenced by the UI, to pass configuration
// set here directly within the Node process to Mockttp (e.g. to set callbacks etc that
// can't be transferred through the API or which need access to server internals).
// This is a constant but mutable dictionary, which will be modified as the appropriate
// parameters change. Mockttp reads from the dictionary each time rules are configured.
const ruleParameters = {};
async function runHTK(options) {
    const startTime = Date.now();
    (0, shutdown_1.registerShutdownHandler)();
    const configPath = options.configPath || (0, env_paths_1.default)('httptoolkit', { suffix: '' }).config;
    await (0, fs_1.ensureDirectoryExists)(configPath);
    await (0, browsers_1.checkBrowserConfig)(configPath);
    const configCheckTime = Date.now();
    console.log('Config checked in', configCheckTime - startTime, 'ms');
    const httpsConfig = await generateHTTPSConfig(configPath);
    const certSetupTime = Date.now();
    console.log('Certificates setup in', certSetupTime - configCheckTime, 'ms');
    // Start a Mockttp standalone server
    const standalone = new mockttp_1.PluggableAdmin.AdminServer({
        adminPlugins: {
            http: mockttp_pluggable_admin_1.MockttpAdminPlugin,
            webrtc: mockrtc_1.MockRTCAdminPlugin
        },
        pluginDefaults: {
            http: {
                options: {
                    cors: false,
                    recordTraffic: false,
                    https: httpsConfig // Use our HTTPS config for HTTPS MITMs.
                }
            },
            webrtc: {
                recordMessages: false // Don't persist WebRTC traffic server-side either.
            }
        },
        corsOptions: {
            strict: true,
            origin: constants_1.MOCKTTP_ALLOWED_ORIGINS,
            maxAge: 86400,
            allowPrivateNetworkAccess: true // Allow access from non-local domains in Chrome 102+
        },
        webSocketKeepAlive: 20000,
        ruleParameters // Rule parameter dictionary
    });
    manageBackgroundServices(standalone, httpsConfig, options.mockttpPort);
    await standalone.start({
        port: options.mockttpPort,
        host: '127.0.0.1'
    });
    (0, shutdown_1.addShutdownHandler)(() => standalone.stop());
    const standaloneSetupTime = Date.now();
    console.log('Standalone server started in', standaloneSetupTime - certSetupTime, 'ms');
    // Start the HTK server API
    const apiServer = new api_server_1.HttpToolkitServerApi({ configPath, authToken: options.authToken, https: httpsConfig }, new http_client_1.HttpClient(ruleParameters), () => standalone.ruleParameterKeys);
    const updateMutex = new async_mutex_1.Mutex();
    apiServer.on('update-requested', () => {
        updateMutex.runExclusive(() => update_1.default.run(['stable'])
            .catch((error) => {
            if ((0, util_1.isErrorLike)(error)) {
                // Did we receive a successful update, that wants to restart the server:
                if (error.code === 'EEXIT') {
                    // Block future update checks for 6 hours.
                    // If we don't, we'll redownload the same update again every check.
                    // We don't want to block it completely though, in case this server
                    // stays open for a very long time.
                    return (0, util_1.delay)(1000 * 60 * 60 * 6, { unref: true });
                }
                if (error.code === 'EACCES') {
                    // We're running the server without write access to the update directory.
                    // Weird, but it happens and there's nothing we can do - ignore it.
                    console.log(`Update check failed: ${error.message}`);
                    return;
                }
                // Report any HTTP response errors cleanly & explicitly:
                if (error.statusCode) {
                    let url;
                    if ('http' in error) {
                        const request = error.http?.request;
                        url = `${request?.protocol}//${request?.host}${request?.path}`;
                    }
                    (0, error_tracking_1.logError)(`Failed to check for updates due to ${error.statusCode} response ${url
                        ? `from ${url}`
                        : 'from unknown URL'}`);
                    return;
                }
            }
            console.error(`Failed to check for updates: ${error.message}`, { cause: error });
        }));
    });
    await apiServer.start(options.serverPort);
    console.log('Server started in', Date.now() - standaloneSetupTime, 'ms');
    console.log('Total startup took', Date.now() - startTime, 'ms');
}
exports.runHTK = runHTK;
//# sourceMappingURL=index.js.map