"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronInterceptor = void 0;
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const child_process_1 = require("child_process");
const path = tslib_1.__importStar(require("path"));
const util_1 = require("@httptoolkit/util");
const get_port_1 = tslib_1.__importDefault(require("get-port"));
const mockttp_1 = require("mockttp");
const ChromeRemoteInterface = require("chrome-remote-interface");
const fs_1 = require("../util/fs");
const process_management_1 = require("../util/process-management");
const terminal_env_overrides_1 = require("./terminal/terminal-env-overrides");
const error_tracking_1 = require("../error-tracking");
const osx_find_executable_1 = require("@httptoolkit/osx-find-executable");
const isAppBundle = (path) => {
    return process.platform === "darwin" &&
        path.endsWith(".app");
};
// Returns true if this path is wrong, but path.app is a real app bundle.
const shouldBeAppBundle = async (path) => {
    if (process.platform !== 'darwin')
        return false;
    if (await (0, fs_1.canAccess)(path))
        return false;
    return (0, fs_1.canAccess)(path + '.app');
};
class ElectronInterceptor {
    constructor(config) {
        this.config = config;
        this.id = 'electron';
        this.version = '1.0.1';
        this.debugClients = {};
        this.certData = (0, fs_1.readFile)(this.config.https.certPath, 'utf8');
    }
    async isActivable() {
        return true;
    }
    isActive(proxyPort) {
        return !!this.debugClients[proxyPort] &&
            !!this.debugClients[proxyPort].length;
    }
    async activate(proxyPort, options) {
        const debugPort = await (0, get_port_1.default)({ port: proxyPort });
        const { pathToApplication } = options;
        // We're very flexible with paths for app bundles, because on Mac in reality most people
        // never see the executable itself, except when developing their own Electron apps.
        const cmd = isAppBundle(pathToApplication)
            ? await (0, osx_find_executable_1.findExecutableInApp)(pathToApplication)
            : await shouldBeAppBundle(pathToApplication)
                ? await (0, osx_find_executable_1.findExecutableInApp)(pathToApplication + '.app')
                // Non-darwin, or darwin with a full path to the binary:
                : pathToApplication;
        const currentEnv = (0, terminal_env_overrides_1.getInheritableCurrentEnv)();
        const appProcess = (0, child_process_1.spawn)(cmd, [`--inspect-brk=127.0.0.1:${debugPort}`], {
            stdio: 'inherit',
            env: {
                ...currentEnv,
                ...(0, terminal_env_overrides_1.getTerminalEnvVars)(proxyPort, this.config.https, currentEnv),
                // We have to disable NODE_OPTIONS injection. If set, the Electron
                // app never fires paused(). I suspect because --require changes the
                // startup process somehow. Regardless, we don't need it (we're injecting
                // manually anyway) so we just skip it here.
                NODE_OPTIONS: ''
            }
        });
        let debugClient;
        let retries = 10;
        let spawnError;
        appProcess.on('error', async (e) => {
            (0, error_tracking_1.logError)(e);
            if (debugClient) {
                // Try to close the debug connection if open, but very carefully
                try {
                    await debugClient.close();
                }
                catch (e) { }
            }
            // If we're still in the process of debugging the app, give up.
            spawnError = e;
        });
        while (!debugClient && retries >= 0 && !spawnError) {
            try {
                debugClient = await ChromeRemoteInterface({
                    host: '127.0.0.1',
                    port: debugPort
                });
            }
            catch (error) {
                if (((0, util_1.isErrorLike)(error) && error.code !== 'ECONNREFUSED') || retries === 0) {
                    throw error;
                }
                retries = retries - 1;
                await (0, util_1.delay)(500);
            }
        }
        if (spawnError)
            throw spawnError;
        if (!debugClient)
            throw new Error('Could not initialize CDP client');
        this.debugClients[proxyPort] = this.debugClients[proxyPort] || [];
        this.debugClients[proxyPort].push(debugClient);
        debugClient.on('disconnect', () => {
            lodash_1.default.remove(this.debugClients[proxyPort], c => c === debugClient);
        });
        // These allow us to use the APIs below
        await debugClient.Runtime.enable();
        await debugClient.Debugger.enable();
        // This starts watching for the initial pause event, which gives us the
        // inside-electron call frame to inject into (i.e. with require() available)
        const callFramePromise = new Promise((resolve) => {
            debugClient.Debugger.paused((stack) => {
                resolve(stack.callFrames[0].callFrameId);
            });
        });
        // This confirms we're ready, and triggers pause():
        await debugClient.Runtime.runIfWaitingForDebugger();
        const callFrameId = await callFramePromise;
        console.log("Injecting interception settings into Electron app...");
        // Inside the Electron process, load our electron-intercepting JS.
        const injectionResult = await debugClient.Debugger.evaluateOnCallFrame({
            expression: `require(${
            // Need to stringify to handle chars that need escaping (e.g. windows backslashes)
            JSON.stringify(path.join(terminal_env_overrides_1.OVERRIDES_DIR, 'js', 'prepend-electron.js'))})({
                newlineEncodedCertData: "${(await this.certData).replace(/\r\n|\r|\n/g, '\\n')}",
                spkiFingerprint: "${await (0, mockttp_1.generateSPKIFingerprint)(await this.certData)}"
            })`,
            callFrameId
        });
        if (injectionResult.exceptionDetails) {
            const exception = injectionResult.exceptionDetails;
            console.log(exception);
            (0, error_tracking_1.addBreadcrumb)("Evaluate error", {
                message: exception && exception.description,
                data: injectionResult.exceptionDetails
            });
            throw new Error("Failed to inject into Electron app");
        }
        console.log("App intercepted, resuming...");
        await debugClient.Debugger.resume();
        console.log("App resumed, Electron interception complete");
    }
    async deactivate(proxyPort) {
        if (!this.isActive(proxyPort))
            return;
        await Promise.all(this.debugClients[proxyPort].map(async (debugClient) => {
            let shutdown = false;
            const disconnectPromise = new Promise((resolve) => debugClient.on('disconnect', resolve)).then(() => {
                shutdown = true;
            });
            const pidResult = (await debugClient.Runtime.evaluate({
                expression: 'process.pid'
            }).catch(() => ({ result: undefined }))).result;
            const pid = pidResult && pidResult.type === 'number'
                ? pidResult.value
                : undefined;
            // If we can extract the pid, use it to cleanly close the app:
            if (lodash_1.default.isNumber(pid)) {
                if (process.platform === 'win32') {
                    await (0, process_management_1.windowsClose)(pid);
                }
                else {
                    process.kill(pid, "SIGTERM");
                }
                // Wait up to 1s for a clean shutdown & disconnect
                await Promise.race([disconnectPromise, (0, util_1.delay)(1000)]);
            }
            if (!shutdown) {
                // Didn't shutdown yet? Inject a hard exit.
                await Promise.race([
                    debugClient.Runtime.evaluate({
                        expression: 'process.exit(0)'
                    }).catch(() => { }),
                    disconnectPromise // If we disconnect, evaluate can time out
                ]);
            }
            ;
        }));
    }
    async deactivateAll() {
        await Promise.all(Object.keys(this.debugClients).map(port => this.deactivate(port)));
    }
}
exports.ElectronInterceptor = ElectronInterceptor;
//# sourceMappingURL=electron.js.map