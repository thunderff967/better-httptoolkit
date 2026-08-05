"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildInterceptors = void 0;
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const shutdown_1 = require("../shutdown");
const fresh_firefox_1 = require("./fresh-firefox");
const chromium_based_interceptors_1 = require("./chromium-based-interceptors");
const fresh_terminal_interceptor_1 = require("./terminal/fresh-terminal-interceptor");
const existing_terminal_interceptor_1 = require("./terminal/existing-terminal-interceptor");
const android_adb_interceptor_1 = require("./android/android-adb-interceptor");
const docker_interceptor_1 = require("./docker/docker-interceptor");
const electron_1 = require("./electron");
const jvm_1 = require("./jvm");
const frida_android_interceptor_1 = require("./frida/frida-android-interceptor");
const frida_ios_interceptor_1 = require("./frida/frida-ios-interceptor");
function buildInterceptors(config) {
    const interceptors = [
        new chromium_based_interceptors_1.FreshChrome(config),
        new chromium_based_interceptors_1.ExistingChrome(config),
        new chromium_based_interceptors_1.FreshChromeBeta(config),
        new chromium_based_interceptors_1.FreshChromeDev(config),
        new chromium_based_interceptors_1.FreshChromeCanary(config),
        new chromium_based_interceptors_1.FreshChromium(config),
        new chromium_based_interceptors_1.ExistingChromium(config),
        new chromium_based_interceptors_1.FreshChromiumDev(config),
        new chromium_based_interceptors_1.FreshEdge(config),
        new chromium_based_interceptors_1.FreshEdgeBeta(config),
        new chromium_based_interceptors_1.FreshEdgeDev(config),
        new chromium_based_interceptors_1.FreshEdgeCanary(config),
        new chromium_based_interceptors_1.FreshOpera(config),
        new chromium_based_interceptors_1.FreshBrave(config),
        new fresh_firefox_1.FreshFirefox(config),
        new fresh_firefox_1.FreshFirefoxDeveloper(config),
        new fresh_firefox_1.FreshFirefoxNightly(config),
        new fresh_terminal_interceptor_1.FreshTerminalInterceptor(config),
        new existing_terminal_interceptor_1.ExistingTerminalInterceptor(config),
        new electron_1.ElectronInterceptor(config),
        new android_adb_interceptor_1.AndroidAdbInterceptor(config),
        new frida_android_interceptor_1.FridaAndroidInterceptor(config),
        new frida_ios_interceptor_1.FridaIosInterceptor(config),
        new jvm_1.JvmInterceptor(config),
        new docker_interceptor_1.DockerContainerInterceptor(config)
    ];
    // When the server exits, try to shut down the interceptors too
    (0, shutdown_1.addShutdownHandler)(() => shutdownInterceptors(interceptors));
    const interceptorIndex = lodash_1.default.keyBy(interceptors, (interceptor) => interceptor.id);
    if (Object.keys(interceptorIndex).length !== interceptors.length) {
        throw new Error('Duplicate interceptor id');
    }
    return interceptorIndex;
}
exports.buildInterceptors = buildInterceptors;
function shutdownInterceptors(interceptors) {
    return Promise.all(interceptors.map(i => i.deactivateAll()));
}
//# sourceMappingURL=index.js.map