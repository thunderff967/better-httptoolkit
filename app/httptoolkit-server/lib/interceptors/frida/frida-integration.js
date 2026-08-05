"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrCreateFridaSession = exports.clearFridaSessionCache = exports.createFridaSessionCache = exports.FRIDA_SESSION_IDLE_TIMEOUT = exports.launchScript = exports.testAndSelectProxyAddress = exports.killProcess = exports.cleanupOldFridaServers = exports.getFridaServer = exports.FRIDA_SRIS = exports.FRIDA_BINARY_NAME = exports.FRIDA_ALTERNATE_PORT = exports.FRIDA_DEFAULT_PORT = exports.FRIDA_VERSION = void 0;
const tslib_1 = require("tslib");
const FridaJs = tslib_1.__importStar(require("frida-js"));
const util_1 = require("@httptoolkit/util");
const promise_1 = require("../../util/promise");
const network_1 = require("../../util/network");
const dynamicDeps = tslib_1.__importStar(require("../../dynamic-dep-store"));
const frida_scripts_1 = require("./frida-scripts");
exports.FRIDA_VERSION = '17.9.1';
exports.FRIDA_DEFAULT_PORT = 27042;
exports.FRIDA_ALTERNATE_PORT = 24072; // Reversed to mildly inconvenience detection
exports.FRIDA_BINARY_NAME = `adirf-server-${exports.FRIDA_VERSION}`; // Reversed to mildly inconvenience detection
// To update this, run `await require('frida-js').calculateFridaSRI({ version, arch, platform })`
exports.FRIDA_SRIS = {
    'android': {
        'arm': 'sha512-zkGBz192uvqJLvJkoWfKd5jGWLK5zpAwU3UIWTpw/3nTXsVMAopoX5YauPaQvaT/rq5pfyCAcZDCibka9j/tCQ==',
        'arm64': 'sha512-Q6QnFMueCXV/CuvMKXgEeABWn8ewDp4VHn0Gi5HHrwXxPuqCFuSfjqbGox5gAj9RtWbPGisRMuQgVEdh5EVo4A==',
        'x86': 'sha512-8CtZSJz3e6eHC2Z3n/O3NG1EMEokzTZPA7IJcPIJ+yfP+/X3Kb193+s30hFp5P4tzMaSs6yBwmKRVhdYHzNQXQ==',
        'x86_64': 'sha512-Hfod8inu+pg7a067onN9/GSmW0rh9E+DWkBWeHet6ceF7lnZDcN3zoBNzaAZwFn6QsNZess3A5X5fyx0M+deew=='
    }
};
const getFridaServer = (config, platform, arch) => {
    return dynamicDeps.getDependencyStream({
        config,
        key: ['frida-server', platform, arch, exports.FRIDA_VERSION],
        ext: '.bin',
        fetch: ([, platform, arch, version]) => {
            return FridaJs.downloadFridaServer({
                version: version,
                platform: platform,
                arch: arch,
                sri: exports.FRIDA_SRIS.android[arch]
            });
        }
    });
};
exports.getFridaServer = getFridaServer;
const cleanupOldFridaServers = async (config) => {
    await dynamicDeps.cleanupDependencies({
        config,
        keyPrefix: 'frida-server',
        versionToKeep: exports.FRIDA_VERSION,
        ext: '.bin'
    });
};
exports.cleanupOldFridaServers = cleanupOldFridaServers;
class FridaScriptError extends util_1.CustomError {
    constructor(message) {
        super(message.description, {
            code: 'frida-script-error'
        });
        if (message.stack) {
            this.stack = message.stack;
        }
    }
}
class FridaProxyError extends util_1.CustomError {
    constructor(message, options = {}) {
        super(message, {
            cause: options.cause,
            code: 'unreachable-proxy'
        });
    }
}
async function killProcess(session) {
    // We have to resume and then wait briefly before we can kill:
    await session.resume()
        .then(() => (0, util_1.delay)(100)) // Even 0 seems to work - but let's be safe
        .catch(() => { });
    await session.kill();
}
exports.killProcess = killProcess;
async function testAndSelectProxyAddress(session, proxyPort, options = {}) {
    const interfaceAddresses = (0, network_1.getReachableInterfaces)();
    const ips = interfaceAddresses.map(a => a.address);
    if (options.extraAddresses?.length) {
        ips.push(...options.extraAddresses);
    }
    if (ips.length === 0) {
        throw new FridaProxyError("No local IPs detected for proxy connection");
    }
    const ipTestScript = await (0, frida_scripts_1.buildIpTestScript)(ips, proxyPort);
    return await (0, promise_1.withTimeout)(1000, new Promise(async (resolve, reject) => {
        try {
            session.onMessage((message) => {
                if (message.type === 'send') {
                    if (message.payload.type === 'connected') {
                        resolve(message.payload.ip);
                    }
                    else if (message.payload.type === 'connection-failed') {
                        reject(new FridaProxyError(`Could not connect to proxy on port ${proxyPort} at ${ips.length > 1
                            ? `any of: ${ips.join(', ')}`
                            : ips[0]}`));
                    }
                    else {
                        reject(new Error(`Unexpected message type: ${message.payload.type}`));
                    }
                }
                else if (message.type === 'error') {
                    const fridaError = new FridaScriptError(message);
                    reject(new util_1.CustomError(`Error in Frida IP test script: ${message.description}`, { cause: fridaError, code: 'frida-ip-test-script-error' }));
                }
            });
            await (await session.createScript(ipTestScript)).loadScript();
        }
        catch (e) {
            reject(e);
        }
    })).catch((e) => {
        if (e instanceof FridaProxyError)
            throw e;
        else {
            throw new FridaProxyError(`Proxy IP detection on target device failed for port ${proxyPort} and IPs ${JSON.stringify(ips)}`, { cause: e });
        }
    });
}
exports.testAndSelectProxyAddress = testAndSelectProxyAddress;
/**
 * Launch a script, watching for errors during its initial exception, and logging any
 * output or returned messages from the session to the console.
 *
 * Note that only one session monitor can be active at any time, so this will replace
 * any existing session message monitoring.
 */
async function launchScript(targetName, session, script) {
    const scriptSession = await session.createScript(script);
    let scriptLoaded = false;
    await new Promise((resolve, reject) => {
        session.onMessage((message) => {
            if (message.type === 'error') {
                const fridaError = new FridaScriptError(message);
                if (!scriptLoaded) {
                    reject(new util_1.CustomError(`Failed to run Frida script on ${targetName}: ${message.description}`, { cause: fridaError, code: 'frida-script-error' }));
                }
                else {
                    console.warn(`Frida ${targetName} injection error:`, fridaError);
                }
            }
            else if (message.type === 'log') {
                if (message.payload.trim() === '')
                    return;
                console.log(`Frida ${targetName} [${message.level}]: ${message.payload}`);
            }
            else {
                console.log(message);
            }
        });
        scriptSession.loadScript()
            .then(resolve)
            .catch(reject);
    });
    scriptLoaded = true;
}
exports.launchScript = launchScript;
exports.FRIDA_SESSION_IDLE_TIMEOUT = 30000;
function createFridaSessionCache() {
    return {};
}
exports.createFridaSessionCache = createFridaSessionCache;
function clearFridaSessionCache(cache, hostId) {
    const cached = cache[hostId];
    if (cached) {
        clearTimeout(cached.timeout);
        cached.cleanup();
        delete cache[hostId];
    }
}
exports.clearFridaSessionCache = clearFridaSessionCache;
async function getOrCreateFridaSession(cache, hostId, getStream) {
    let cached = cache[hostId];
    if (cached) {
        clearTimeout(cached.timeout);
        cached.timeout = setTimeout(() => clearFridaSessionCache(cache, hostId), exports.FRIDA_SESSION_IDLE_TIMEOUT);
        return { fridaSession: cached.fridaSession, wasCached: true };
    }
    const fridaStream = await getStream();
    const fridaSession = await FridaJs.connect({ stream: fridaStream });
    const timeout = setTimeout(() => clearFridaSessionCache(cache, hostId), exports.FRIDA_SESSION_IDLE_TIMEOUT);
    const cleanup = () => fridaSession.disconnect()
        .catch(() => { })
        .finally(() => fridaStream.destroy());
    cache[hostId] = {
        fridaSession,
        cleanup,
        timeout
    };
    fridaStream.on('error', cleanup);
    return { fridaSession, wasCached: false };
}
exports.getOrCreateFridaSession = getOrCreateFridaSession;
//# sourceMappingURL=frida-integration.js.map