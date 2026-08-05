"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FridaIosInterceptor = void 0;
const usbmux_client_1 = require("usbmux-client");
const util_1 = require("@httptoolkit/util");
const frida_integration_1 = require("./frida-integration");
const frida_ios_integration_1 = require("./frida-ios-integration");
class FridaIosInterceptor {
    constructor(config) {
        this.config = config;
        this.id = "ios-frida";
        this.version = "1.0.0";
        this.usbmuxClient = new usbmux_client_1.UsbmuxClient();
        this.getFridaHosts = (0, util_1.combineParallelCalls)(() => (0, frida_ios_integration_1.getIosFridaHosts)(this.usbmuxClient));
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
            targets: await (0, frida_ios_integration_1.getIosFridaTargets)(this.usbmuxClient, hostId)
        };
    }
    async activate(proxyPort, options) {
        if (options.action === 'intercept') {
            const fridaSession = await (0, frida_ios_integration_1.interceptIosFridaTarget)(this.usbmuxClient, options.hostId, options.targetId, this.config.https.certContent, proxyPort, options.enableSocks ?? false);
            // Track this session, so we can close it to stop the interception later
            this.interceptedApps[proxyPort] = this.interceptedApps[proxyPort] ?? [];
            this.interceptedApps[proxyPort].push(fridaSession);
        }
        else {
            throw new Error(`Unknown Frida interception command: ${options.action ?? '(none)'}`);
        }
    }
    async deactivate(proxyPort) {
        await Promise.all(this.interceptedApps[proxyPort]?.map(async (fridaSession) => {
            await (0, frida_integration_1.killProcess)(fridaSession).catch(() => { });
        }));
    }
    async deactivateAll() {
        await Promise.all(Object.keys(this.interceptedApps)
            .map(port => this.deactivate(Number(port))));
    }
}
exports.FridaIosInterceptor = FridaIosInterceptor;
//# sourceMappingURL=frida-ios-interceptor.js.map