"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildIpTestScript = exports.buildIosFridaScript = exports.buildAndroidFridaScript = void 0;
const tslib_1 = require("tslib");
const path = tslib_1.__importStar(require("path"));
const fs = tslib_1.__importStar(require("../../util/fs"));
const terminal_env_overrides_1 = require("../terminal/terminal-env-overrides");
const FRIDA_SCRIPTS_ROOT = path.join(terminal_env_overrides_1.OVERRIDES_DIR, 'frida');
function buildFridaConfig(configScriptTemplate, caCertContent, proxyHost, proxyPort, portsToIgnore, enableSocks) {
    return configScriptTemplate
        .replace(/(?<=const CERT_PEM = `)[^`]+(?=`)/s, caCertContent.trim())
        .replace(/(?<=const PROXY_HOST = ')[^']+(?=')/, proxyHost)
        .replace(/(?<=const PROXY_PORT = )\d+(?=;)/, proxyPort.toString())
        .replace(/(?<=const PROXY_SUPPORTS_SOCKS5 = )false(?=;)/, enableSocks.toString())
        .replace(/(?<=const IGNORED_NON_HTTP_PORTS = )\[\s*\](?=;)/s, JSON.stringify(portsToIgnore));
}
async function buildAndroidFridaScript(caCertContent, proxyHost, proxyPort, portsToIgnore, enableSocks) {
    const scripts = await Promise.all([
        fs.readFile(path.join(FRIDA_SCRIPTS_ROOT, 'frida-java-bridge.js'), { encoding: 'utf8' }),
        fs.readFile(path.join(FRIDA_SCRIPTS_ROOT, 'config.js'), { encoding: 'utf8' })
            .then((configTemplate) => buildFridaConfig(configTemplate, caCertContent, proxyHost, proxyPort, portsToIgnore, enableSocks)),
        ...[
            ['native-connect-hook.js'],
            ['native-tls-hook.js'],
            ['android', 'android-proxy-override.js'],
            ['android', 'android-system-certificate-injection.js'],
            ['android', 'android-certificate-unpinning.js'],
            ['android', 'android-certificate-unpinning-fallback.js'],
            ['android', 'android-disable-root-detection.js']
        ].map((hookRelPath) => fs.readFile(path.join(FRIDA_SCRIPTS_ROOT, ...hookRelPath), { encoding: 'utf8' }))
    ]);
    return scripts.join('\n');
}
exports.buildAndroidFridaScript = buildAndroidFridaScript;
async function buildIosFridaScript(caCertContent, proxyHost, proxyPort, portsToIgnore, enableSocks) {
    const scripts = await Promise.all([
        fs.readFile(path.join(FRIDA_SCRIPTS_ROOT, 'frida-objc-bridge.js'), { encoding: 'utf8' }),
        fs.readFile(path.join(FRIDA_SCRIPTS_ROOT, 'config.js'), { encoding: 'utf8' })
            .then((configTemplate) => buildFridaConfig(configTemplate, caCertContent, proxyHost, proxyPort, portsToIgnore, enableSocks)),
        ...[
            ['ios', 'ios-connect-hook.js'],
            ['ios', 'ios-disable-detection.js'],
            ['native-tls-hook.js'],
            ['native-connect-hook.js'],
        ].map((hookRelPath) => fs.readFile(path.join(FRIDA_SCRIPTS_ROOT, ...hookRelPath), { encoding: 'utf8' }))
    ]);
    return scripts.join('\n');
}
exports.buildIosFridaScript = buildIosFridaScript;
async function buildIpTestScript(ips, proxyPort) {
    const baseScript = await fs.readFile(path.join(FRIDA_SCRIPTS_ROOT, 'utilities', 'test-ip-connectivity.js'), { encoding: 'utf8' });
    return baseScript.replace(/(?<=const IP_ADDRESSES_TO_TEST = )\[\s+\](?=;)/s, JSON.stringify(ips))
        .replace(/(?<=const TARGET_PORT = )0(?=;)/, proxyPort.toString());
}
exports.buildIpTestScript = buildIpTestScript;
//# sourceMappingURL=frida-scripts.js.map