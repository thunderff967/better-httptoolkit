"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interceptAndroidFridaTarget = exports.getAndroidFridaTargets = exports.launchAndroidHost = exports.setupAndroidHost = exports.getAndroidFridaHosts = void 0;
const tslib_1 = require("tslib");
const util_1 = require("@httptoolkit/util");
const FridaJs = tslib_1.__importStar(require("frida-js"));
const promise_1 = require("../../util/promise");
const adb_commands_1 = require("../android/adb-commands");
const frida_scripts_1 = require("./frida-scripts");
const frida_integration_1 = require("./frida-integration");
const ANDROID_DEVICE_HTK_PATH = '/data/local/tmp/.httptoolkit';
const ANDROID_FRIDA_BINARY_PATH = `${ANDROID_DEVICE_HTK_PATH}/${frida_integration_1.FRIDA_BINARY_NAME}`;
const ALL_X_PERMS = 0o00111;
const isFridaInstalled = (deviceClient) => deviceClient.readdir(ANDROID_DEVICE_HTK_PATH)
    .then((entries) => entries.some((entry) => entry.name === frida_integration_1.FRIDA_BINARY_NAME &&
    (entry.mode & ALL_X_PERMS) !== 0 &&
    entry.size > 0))
    .catch(() => false);
const isDevicePortOpen = (deviceClient, port) => (0, promise_1.withTimeout)(1000, deviceClient.openTcp(port))
    .then((conn) => {
    // If the connection opened at all, then something is listening...
    conn.on('error', () => { });
    conn.end();
    return true;
}).catch(() => {
    // If the port is closed, we jump straight to the error state instead
    return false;
});
async function getAndroidFridaHosts(adbClient) {
    const devices = await (0, adb_commands_1.getConnectedDevices)(adbClient);
    return Object.fromEntries(await Promise.all(Object.entries(devices).map(async ([id, device]) => [
        id, {
            ...device,
            type: 'android',
            state: await getHostState(adbClient, id)
        }
    ])));
}
exports.getAndroidFridaHosts = getAndroidFridaHosts;
const getHostState = async (adbClient, deviceId) => {
    const deviceClient = adbClient.getDevice(deviceId);
    let state = 'unavailable';
    // We run state checks in series, not parallel - slower, but less hammering of
    // ADB APIs & device processing, and no running any unnecessary checks.
    const [defaultPortOpen, alternatePortOpen] = await Promise.all([
        isDevicePortOpen(deviceClient, frida_integration_1.FRIDA_DEFAULT_PORT),
        isDevicePortOpen(deviceClient, frida_integration_1.FRIDA_ALTERNATE_PORT)
    ]);
    if (defaultPortOpen || alternatePortOpen) {
        state = 'available';
    }
    else if (await isFridaInstalled(deviceClient)) {
        state = 'launch-required';
    }
    else if (await (0, adb_commands_1.isProbablyRooted)(deviceClient)) {
        state = 'setup-required';
    }
    else {
        // No Frida - looks unrooted - nothing we can do.
        state = 'unavailable';
    }
    return state;
};
const ANDROID_ABI_FRIDA_ARCH_MAP = {
    'arm64-v8a': 'arm64',
    'armeabi': 'arm',
    'armabi-v7a': 'arm',
    'x86': 'x86',
    'x86_64': 'x86_64'
};
async function setupAndroidHost(config, adbClient, hostId) {
    console.log(`Installing Android Frida server on ${hostId}...`);
    const deviceClient = adbClient.getDevice(hostId);
    const deviceProperties = await deviceClient.getProperties();
    const supportedAbis = (deviceProperties['ro.product.cpu.abilist']?.split(',') ??
        [deviceProperties['ro.product.cpu.abi']]).map(abi => abi.trim());
    const firstKnownAbi = supportedAbis.find((abi) => Object.keys(ANDROID_ABI_FRIDA_ARCH_MAP).includes(abi));
    if (!firstKnownAbi)
        throw new Error(`Did not recognize any device ABIs from ${supportedAbis.join(',')}`);
    const deviceArch = ANDROID_ABI_FRIDA_ARCH_MAP[firstKnownAbi];
    const serverStream = await (0, frida_integration_1.getFridaServer)(config, 'android', deviceArch);
    const transfer = await deviceClient.push(serverStream, ANDROID_FRIDA_BINARY_PATH, 0o555);
    await new Promise((resolve, reject) => {
        transfer.on('end', resolve);
        transfer.on('error', reject);
    });
}
exports.setupAndroidHost = setupAndroidHost;
async function launchAndroidHost(adbClient, hostId) {
    console.log(`Launching Android Frida server on ${hostId}...`);
    const deviceClient = adbClient.getDevice(hostId);
    const runAsRoot = await (0, adb_commands_1.getRootCommand)(deviceClient);
    if (!runAsRoot) {
        throw new util_1.CustomError("Couldn't get root access to launch Frida Server", {
            code: 'no-root'
        });
    }
    const fridaServerStream = await deviceClient.shell(runAsRoot(ANDROID_FRIDA_BINARY_PATH, '-l', `127.0.0.1:${frida_integration_1.FRIDA_ALTERNATE_PORT}`));
    fridaServerStream.on('error', (e) => {
        console.log('Frida server error:', e);
    });
    fridaServerStream.pipe(process.stdout);
    // Wait until the server becomes accessible
    try {
        await (0, promise_1.waitUntil)(500, 10, async () => {
            try {
                return await getHostState(adbClient, hostId) === 'available';
            }
            catch (e) {
                console.log(e.message ?? e);
                return false;
            }
        });
        return fridaServerStream;
    }
    catch (e) {
        const errorMessage = e?.code === 'wait-loop-failed'
            ? 'Frida server did not startup before timeout'
            : e.message ?? e;
        console.log('Frida launch failed:', errorMessage);
        // Try cleaning up the Frida server (async) just in case it's corrupted somehow:
        deviceClient.shell(runAsRoot('rm', '-f', ANDROID_FRIDA_BINARY_PATH))
            .then((stream) => {
            return new Promise((resolve, reject) => {
                stream.on('close', resolve);
                stream.on('error', reject);
                stream.resume();
            });
        })
            .catch((e) => {
            console.warn(`Failed to clean up broken Frida server on ${hostId} at ${ANDROID_FRIDA_BINARY_PATH}: ${e.message ?? e}`);
        });
        throw new util_1.CustomError(errorMessage, { code: e?.code, cause: e });
    }
}
exports.launchAndroidHost = launchAndroidHost;
const getFridaStream = (hostId, deviceClient) => 
// Try alt port first (preferred and more likely to work - it's ours)
deviceClient.openTcp(frida_integration_1.FRIDA_ALTERNATE_PORT)
    .catch(() => deviceClient.openTcp(frida_integration_1.FRIDA_DEFAULT_PORT))
    .catch(() => {
    throw new util_1.CustomError(`Couldn't connect to Frida for ${hostId}`, {
        statusCode: 502
    });
})
    .then((stream) => {
    // Handle errors on this stream - the Frida session will expose them properly,
    // but we want to make sure nothing hard-crashes in the meantime.
    stream.on('error', (e) => {
        console.warn(`Frida stream error for ${hostId}:`, e);
    });
    return stream;
});
// Frida session cache for Android hosts
const fridaSessionCache = (0, frida_integration_1.createFridaSessionCache)();
async function getOrCreateAndroidFridaSession(hostId, deviceClient) {
    return (0, frida_integration_1.getOrCreateFridaSession)(fridaSessionCache, hostId, () => getFridaStream(hostId, deviceClient));
}
async function getAndroidFridaTargets(adbClient, hostId) {
    const deviceClient = adbClient.getDevice(hostId);
    let fridaSession;
    let wasCached = false;
    try {
        ({ fridaSession, wasCached } = await getOrCreateAndroidFridaSession(hostId, deviceClient));
        return await fridaSession.enumerateApplications();
    }
    catch (e) {
        (0, frida_integration_1.clearFridaSessionCache)(fridaSessionCache, hostId);
        if (wasCached) {
            // When a cached session fails, we retry with a fresh one:
            return getAndroidFridaTargets(adbClient, hostId);
        }
        else {
            throw e;
        }
    }
}
exports.getAndroidFridaTargets = getAndroidFridaTargets;
// Various ports which we know that certain apps use for non-HTTP traffic that we
// can't currently intercept, so we avoid capturing for now.
const KNOWN_APP_PROBLEMATIC_PORTS = {
    'com.spotify.music': [4070]
};
async function interceptAndroidFridaTarget(adbClient, hostId, appId, caCertContent, proxyPort, enableSocks) {
    console.log(`Intercepting ${appId} via Android Frida on ${hostId}...`);
    const deviceClient = adbClient.getDevice(hostId);
    // We try to tunnel the proxy over ADB, but if we can't then that's OK - we'll use wifi/etc instead
    const tunnelCreated = await (0, adb_commands_1.createPersistentReverseTunnel)(deviceClient, proxyPort, proxyPort)
        .then(() => true)
        .catch(() => false);
    const fridaStream = await getFridaStream(hostId, deviceClient);
    const fridaSession = await FridaJs.connect({
        stream: fridaStream
    });
    const { session } = await fridaSession.spawnPaused(appId, undefined);
    try {
        const proxyIp = await (0, frida_integration_1.testAndSelectProxyAddress)(session, proxyPort, {
            // Localhost here is local to the device - it's the reverse tunnel
            // over ADB, which is generally more robust than wifi etc
            extraAddresses: [
                '127.0.0.1',
                ...adb_commands_1.EMULATOR_HOST_IPS,
            ]
        }).catch((e) => {
            console.warn(`Failed to select proxy address for ${appId} on ${hostId}: ${e.message ?? e}`);
            // This can be flaky in some weird cases - when all else fails, we always fallback to the
            // ADB reverse tunnel if that's available
            if (tunnelCreated)
                return '127.0.0.1';
            else
                throw e;
        });
        const interceptionScript = await (0, frida_scripts_1.buildAndroidFridaScript)(caCertContent, proxyIp, proxyPort, KNOWN_APP_PROBLEMATIC_PORTS[appId] ?? [], enableSocks);
        await (0, frida_integration_1.launchScript)(`Android (${appId})`, session, interceptionScript);
        await session.resume();
        console.log(`Frida Android interception started: ${appId} on ${hostId} forwarding to ${proxyIp}:${proxyPort}`);
        return session;
    }
    catch (e) {
        // If anything goes wrong, just make sure we shut down the app again
        await (0, frida_integration_1.killProcess)(session).catch(console.log);
        throw e;
    }
}
exports.interceptAndroidFridaTarget = interceptAndroidFridaTarget;
//# sourceMappingURL=frida-android-integration.js.map