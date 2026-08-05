"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FridaAndroidInterceptor = void 0;
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const adb_commands_1 = require("../android/adb-commands");
const frida_integration_1 = require("./frida-integration");
const frida_android_integration_1 = require("./frida-android-integration");
const util_1 = require("@httptoolkit/util");
class FridaAndroidInterceptor {
    constructor(config) {
        this.config = config;
        this.id = "android-frida";
        this.version = "1.0.0";
        this.adbClient = (0, adb_commands_1.createAdbClient)();
        this.getFridaHosts = (0, util_1.combineParallelCalls)(() => (0, frida_android_integration_1.getAndroidFridaHosts)(this.adbClient));
        this.fridaServers = {};
        this.interceptedApps = {};
    }
    async isActivable() {
        return Object.keys(await this.getFridaHosts()).length > 0;
    }
    isActive() {
        return false;
    }
    async getMetadata() {
        const fridaHosts = await this.getFridaHosts();
        return {
            hosts: fridaHosts
        };
    }
    async getSubMetadata(hostId) {
        return {
            targets: await (0, frida_android_integration_1.getAndroidFridaTargets)(this.adbClient, hostId)
        };
    }
    async activate(proxyPort, options) {
        if (options.action === 'setup') {
            await (0, frida_android_integration_1.setupAndroidHost)(this.config, this.adbClient, options.hostId);
        }
        else if (options.action === 'launch') {
            const fridaServer = await (0, frida_android_integration_1.launchAndroidHost)(this.adbClient, options.hostId);
            // Track this server stream, so we can close it to stop the server later
            this.fridaServers[proxyPort] = this.fridaServers[proxyPort] ?? [];
            this.fridaServers[proxyPort].push(fridaServer);
            fridaServer.on('close', () => {
                lodash_1.default.remove(this.fridaServers[proxyPort], fridaServer);
            });
        }
        else if (options.action === 'intercept') {
            const fridaSession = await (0, frida_android_integration_1.interceptAndroidFridaTarget)(this.adbClient, options.hostId, options.targetId, this.config.https.certContent, proxyPort, options.enableSocks ?? false);
            // Track this session, so we can close it to stop the interception later
            this.interceptedApps[proxyPort] = this.interceptedApps[proxyPort] ?? [];
            this.interceptedApps[proxyPort].push(fridaSession);
        }
        else {
            throw new Error(`Unknown Frida interception command: ${options.action ?? '(none)'}`);
        }
    }
    async deactivate(proxyPort) {
        this.fridaServers[proxyPort]?.forEach(serverStream => {
            serverStream.destroy();
        });
        const fridaSessions = this.interceptedApps[proxyPort] ?? [];
        await Promise.all(fridaSessions.map((session) => (0, frida_integration_1.killProcess)(session).catch(() => { })));
    }
    async deactivateAll() {
        (0, frida_integration_1.cleanupOldFridaServers)(this.config).catch(console.warn);
        const allPorts = new Set([
            ...Object.keys(this.fridaServers),
            ...Object.keys(this.interceptedApps)
        ]);
        await Promise.all([...allPorts]
            .map(port => this.deactivate(Number(port))));
    }
}
exports.FridaAndroidInterceptor = FridaAndroidInterceptor;
//# sourceMappingURL=frida-android-interceptor.js.map