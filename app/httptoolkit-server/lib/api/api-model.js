"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModel = void 0;
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const path = tslib_1.__importStar(require("path"));
const os = tslib_1.__importStar(require("os"));
const semver = tslib_1.__importStar(require("semver"));
const util_1 = require("@httptoolkit/util");
const mockttp_1 = require("mockttp");
const os_proxy_config_1 = require("os-proxy-config");
const constants_1 = require("../constants");
const error_tracking_1 = require("../error-tracking");
const dns_server_1 = require("../dns-server");
const certificates_1 = require("../certificates");
const INTERCEPTOR_TIMEOUT = 1000;
/**
 * Returns the command + args needed to invoke the ctl and mcp tools.
 *
 * If HTK_DESKTOP_RESOURCES is set (by the desktop app or wrapper scripts),
 * wrapper scripts in that directory are used. Otherwise the server's own
 * binary is used with ctl/mcp subcommands, stabilized via the oclif
 * 'current' symlink when available.
 */
async function getToolPaths() {
    const resourcesPath = process.env.HTK_DESKTOP_RESOURCES;
    if (resourcesPath) {
        const ext = process.platform === 'win32' ? '.cmd' : '';
        return {
            ctl: [path.join(resourcesPath, `httptoolkit-ctl${ext}`)],
            mcp: [path.join(resourcesPath, `httptoolkit-mcp${ext}`)]
        };
    }
    // If not (old desktop, local dev) we need to use our own path directly:
    const serverBin = await stabilizeServerBinPath();
    return {
        ctl: [serverBin, 'ctl'],
        mcp: [serverBin, 'mcp']
    };
}
async function stabilizeServerBinPath() {
    const binPath = process.env.HTTPTOOLKIT_SERVER_BINPATH
        ?? path.join(constants_1.APP_ROOT, 'bin', process.platform === 'win32' ? 'run.cmd' : 'run');
    // If the server is running from a versioned oclif directory (e.g. .../client/1.25.0/...),
    // replace the version segment with 'current' for a path that survives updates.
    const appRootBase = path.basename(constants_1.APP_ROOT);
    if (semver.valid(appRootBase) && binPath.startsWith(constants_1.APP_ROOT)) {
        const currentDir = path.join(path.dirname(constants_1.APP_ROOT), 'current');
        try {
            await fs.promises.access(currentDir);
            return currentDir + binPath.slice(constants_1.APP_ROOT.length);
        }
        catch { }
    }
    return binPath;
}
class ApiModel {
    constructor(config, interceptors, getRuleParamKeys, httpClient, callbacks) {
        this.config = config;
        this.interceptors = interceptors;
        this.getRuleParamKeys = getRuleParamKeys;
        this.httpClient = httpClient;
        this.callbacks = callbacks;
    }
    getVersion() {
        return constants_1.SERVER_VERSION;
    }
    updateServer() {
        this.callbacks.onTriggerUpdate();
    }
    // On Windows, there's no clean way to send signals between processes to trigger graceful
    // shutdown. To handle that, we use HTTP from the desktop shell, instead of inter-process
    // signals. This completely shuts down the server, not just a single proxy endpoint, and
    // should only be called once the app is fully exiting.
    shutdownServer() {
        this.callbacks.onTriggerShutdown();
    }
    async getConfig(proxyPort) {
        // Wait for each async part in parallel:
        const [systemProxy, dnsServers, spkiFingerprint] = await Promise.all([
            withFallback(() => (0, os_proxy_config_1.getSystemProxy)(), 2000, undefined),
            proxyPort
                ? await this.getDnsServers(proxyPort)
                : [],
            (0, mockttp_1.generateSPKIFingerprint)(this.config.https.certContent)
        ]);
        return {
            certificatePath: this.config.https.certPath,
            certificateContent: this.config.https.certContent,
            certificateExpiry: (0, certificates_1.getCertExpiry)((0, certificates_1.parseCert)(this.config.https.certContent)),
            // We could calculate this client side, but it  requires node-forge or some
            // other heavyweight crypto lib, and we already have that here, so it's
            // convenient to do it up front.
            certificateFingerprint: spkiFingerprint,
            networkInterfaces: this.getNetworkInterfaces(),
            systemProxy,
            dnsServers,
            ruleParameterKeys: this.getRuleParamKeys(),
            toolPaths: await getToolPaths()
        };
    }
    // Separate purely to support the GQL API resolver structure
    getDnsServers(proxyPort) {
        return withFallback(async () => {
            const dnsServer = await (0, dns_server_1.getDnsServer)(proxyPort);
            return [`127.0.0.1:${dnsServer.address().port}`];
        }, 2000, []);
    }
    getNetworkInterfaces() {
        return os.networkInterfaces();
    }
    getInterceptors(proxyPort) {
        return Promise.all(Object.keys(this.interceptors).map((key) => {
            return this.getInterceptor(key, { metadataType: 'summary', proxyPort });
        }));
    }
    async getInterceptor(id, options = {}) {
        const interceptor = this.interceptors[id];
        // Wait for each async part in parallel:
        const [metadata, isActivable, isActive] = await Promise.all([
            options.metadataType
                ? this.getInterceptorMetadata(id, options.metadataType)
                : undefined,
            withFallback(async () => interceptor.isActivable(), interceptor.activableTimeout || INTERCEPTOR_TIMEOUT, false),
            options.proxyPort
                ? this.isInterceptorActive(id, options.proxyPort)
                : undefined
        ]);
        return {
            id: interceptor.id,
            version: interceptor.version,
            metadata,
            isActivable,
            isActive
        };
    }
    // Separate purely to support the GQL API resolver structure
    async isInterceptorActive(id, proxyPort) {
        const interceptor = this.interceptors[id];
        return await withFallback(async () => proxyPort
            ? interceptor.isActive(proxyPort)
            : undefined, INTERCEPTOR_TIMEOUT, false);
    }
    async getInterceptorMetadata(id, metadataType, subId) {
        const interceptor = this.interceptors[id];
        const metadataTimeout = metadataType === 'summary'
            ? INTERCEPTOR_TIMEOUT
            : INTERCEPTOR_TIMEOUT * 10; // Longer timeout for detailed metadata
        return withFallback(async () => subId
            ? interceptor.getSubMetadata?.(subId)
            : interceptor.getMetadata?.(metadataType), metadataTimeout, undefined);
    }
    async activateInterceptor(id, proxyPort, options) {
        (0, error_tracking_1.addBreadcrumb)(`Activating ${id}`, { category: 'interceptor', data: { id, options } });
        const interceptor = this.interceptors[id];
        if (!interceptor)
            throw new Error(`Unknown interceptor ${id}`);
        // After 30s, don't stop activating, but report an error if we're not done yet
        let activationDone = false;
        (0, util_1.delay)(30000, { unref: true }).then(() => {
            if (!activationDone)
                (0, error_tracking_1.logError)(`Timeout activating ${id}`);
        });
        try {
            const result = await interceptor.activate(proxyPort, options);
            activationDone = true;
            (0, error_tracking_1.addBreadcrumb)(`Successfully activated ${id}`, { category: 'interceptor' });
            return { success: true, metadata: result };
        }
        catch (err) {
            const activationError = err;
            activationDone = true;
            if (activationError.reportable !== false) {
                (0, error_tracking_1.addBreadcrumb)(`Failed to activate ${id}`, { category: 'interceptor' });
                throw err;
            }
            // Non-reportable errors are friendly ones (like Global Chrome quit confirmation)
            // that need to be returned nicely to the UI for further processing.
            return {
                success: false,
                metadata: activationError.metadata
            };
        }
    }
    async deactivateInterceptor(id, proxyPort, options) {
        const interceptor = this.interceptors[id];
        if (!interceptor)
            throw new Error(`Unknown interceptor ${id}`);
        await interceptor.deactivate(proxyPort, options).catch(error_tracking_1.logError);
        return { success: !interceptor.isActive(proxyPort) };
    }
    sendRequest(requestDefinition, requestOptions) {
        return this.httpClient.sendRequest(requestDefinition, requestOptions);
    }
}
exports.ApiModel = ApiModel;
const serializeError = (error) => ({
    message: error.message,
    code: error.code,
    cause: error.cause ? serializeError(error.cause) : undefined
});
// Wait for a promise, falling back to defaultValue on error or timeout
const withFallback = (p, timeoutMs, defaultValue) => Promise.race([
    p().catch((error) => {
        (0, error_tracking_1.logError)(error);
        return defaultValue;
    }),
    (0, util_1.delay)(timeoutMs).then(() => defaultValue)
]);
//# sourceMappingURL=api-model.js.map