"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWebExtensionConfig = exports.clearWebExtensionConfig = exports.WEBEXTENSION_INSTALL = void 0;
const tslib_1 = require("tslib");
const path = tslib_1.__importStar(require("path"));
const os = tslib_1.__importStar(require("os"));
const fs_1 = require("./util/fs");
const shutdown_1 = require("./shutdown");
const terminal_env_overrides_1 = require("./interceptors/terminal/terminal-env-overrides");
const WEBEXTENSION_BASE_PATH = path.join(terminal_env_overrides_1.OVERRIDES_DIR, 'webextension');
async function ensureWebExtensionInstalled() {
    if (exports.WEBEXTENSION_INSTALL)
        return; // No-op after the first install
    else {
        const tmpDir = os.tmpdir();
        const webExtensionPath = path.join(tmpDir, 'httptoolkit-webextension');
        const configPath = path.join(webExtensionPath, 'config');
        await (0, fs_1.copyRecursive)(WEBEXTENSION_BASE_PATH, webExtensionPath);
        await (0, fs_1.mkDir)(configPath).catch((e) => {
            if (e.code === 'EEXIST')
                return; // Already exists, no problem
            else
                throw e;
        });
        exports.WEBEXTENSION_INSTALL = { path: webExtensionPath, configPath };
        console.log(`Webextension installed at ${exports.WEBEXTENSION_INSTALL.path}`);
    }
}
// On shutdown, we delete the webextension install again.
(0, shutdown_1.addShutdownHandler)(async () => {
    if (exports.WEBEXTENSION_INSTALL) {
        console.log(`Uninstalling webextension from ${exports.WEBEXTENSION_INSTALL.path}`);
        await (0, fs_1.deleteFolder)(exports.WEBEXTENSION_INSTALL.path);
        exports.WEBEXTENSION_INSTALL = undefined;
    }
});
const getConfigKey = (proxyPort) => `127_0_0_1.${proxyPort}`; // Filename-safe proxy address
const getConfigPath = (proxyPort) => path.join(exports.WEBEXTENSION_INSTALL.configPath, getConfigKey(proxyPort));
function clearWebExtensionConfig(httpProxyPort) {
    if (!exports.WEBEXTENSION_INSTALL)
        return;
    return (0, fs_1.deleteFile)(getConfigPath(httpProxyPort))
        .catch(() => { }); // We ignore errors - nothing we can do, not very important.
}
exports.clearWebExtensionConfig = clearWebExtensionConfig;
async function updateWebExtensionConfig(sessionId, httpProxyPort, webRTCEnabled, mockttpPort) {
    if (webRTCEnabled) {
        await ensureWebExtensionInstalled();
        const adminBaseUrl = `http://internal.httptoolkit.localhost:${mockttpPort}/session/${sessionId}`;
        await writeConfig(httpProxyPort, {
            mockRtc: {
                peerId: 'matching-peer',
                adminBaseUrl
            }
        });
    }
    else {
        if (exports.WEBEXTENSION_INSTALL) {
            // If the extension is set up, but this specific session has it disabled, we
            // make the config explicitly disable it, just to be clear:
            await writeConfig(httpProxyPort, { mockRtc: false });
        }
    }
}
exports.updateWebExtensionConfig = updateWebExtensionConfig;
async function writeConfig(proxyPort, config) {
    return (0, fs_1.writeFile)(getConfigPath(proxyPort), JSON.stringify(config));
}
//# sourceMappingURL=webextension.js.map