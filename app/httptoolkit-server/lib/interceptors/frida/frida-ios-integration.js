"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interceptIosFridaTarget = exports.getIosFridaTargets = exports.getIosFridaHosts = void 0;
const tslib_1 = require("tslib");
const FridaJs = tslib_1.__importStar(require("frida-js"));
const frida_scripts_1 = require("./frida-scripts");
const frida_integration_1 = require("./frida-integration");
const isDevicePortOpen = (usbmuxClient, deviceId, port) => usbmuxClient.createDeviceTunnel(deviceId, port).then((conn) => {
    // If the connection opened at all, then something is listening...
    conn.on('error', () => { });
    conn.end();
    return true;
}).catch((e) => {
    // If the port is closed, we jump straight to the error state instead
    return false;
});
// We scan frequently, but we don't want to spam the logs, so we just log each time
// Usbmux changes state (just for general reference of any issues).
let lastUsbmuxState = undefined;
async function getIosFridaHosts(usbmuxClient) {
    const devices = await usbmuxClient.getDevices()
        .then((devices) => {
        if (!lastUsbmuxState) {
            console.log('Usbmux iOS scanning connected');
            lastUsbmuxState = true;
        }
        return devices;
    }).catch((e) => {
        if (lastUsbmuxState !== false) {
            console.log(`Usbmux iOS scanning failed: ${e.message ?? e}`);
            lastUsbmuxState = false;
        }
        return [];
    });
    return Object.fromEntries(await Promise.all(Object.values(devices) // N.b. we drop the key, which is just an index (not a useful consistent id)
        .map(async (device) => {
        const details = await getHostDetails(usbmuxClient, device.DeviceID);
        return [
            details.id, {
                ...device,
                type: 'ios',
                id: details.id,
                name: details.name,
                state: details.state
            }
        ];
    })));
}
exports.getIosFridaHosts = getIosFridaHosts;
const HOST_ID_SEPARATOR = '---';
const getHostDetails = async (usbmuxClient, deviceId) => {
    const deviceMetadataPromise = usbmuxClient.queryAllDeviceValues(deviceId);
    let state = 'unavailable';
    // We run state checks in series, not parallel - slower, but less hammering of
    // ADB APIs & device processing, and no running any unnecessary checks.
    const defaultPortOpen = await isDevicePortOpen(usbmuxClient, deviceId, frida_integration_1.FRIDA_DEFAULT_PORT);
    if (defaultPortOpen) {
        state = 'available';
    }
    else {
        // No Frida - no way to detect jailbreak (yet?) - nothing we can do.
        state = 'unavailable';
    }
    const deviceMetadata = await deviceMetadataPromise;
    const deviceName = deviceMetadata.DeviceName ??
        deviceMetadata.DeviceClass ??
        'Unknown iOS Device';
    return {
        id: `${deviceId}${HOST_ID_SEPARATOR}${deviceMetadata.UniqueDeviceID}`,
        name: deviceName,
        type: 'ios',
        state
    };
};
async function getDeviceId(usbmuxClient, hostId) {
    const parts = hostId.split(HOST_ID_SEPARATOR);
    const deviceId = parseInt(parts[0]);
    const udid = parts.slice(1).join(HOST_ID_SEPARATOR);
    const realUdid = await usbmuxClient.queryDeviceValue(deviceId, 'UniqueDeviceID');
    if (udid !== realUdid)
        throw new Error(`Device ID mismatch: ${udid} vs ${realUdid}`);
    return deviceId;
}
;
// Various ports which we know that certain apps use for non-HTTP traffic that we
// can't currently intercept, so we avoid capturing for now.
const KNOWN_APP_PROBLEMATIC_PORTS = {
    'com.spotify.client': [4070]
};
const fridaSessionCache = (0, frida_integration_1.createFridaSessionCache)();
async function getOrCreateIosFridaSession(hostId, usbmuxClient) {
    return (0, frida_integration_1.getOrCreateFridaSession)(fridaSessionCache, hostId, async () => {
        const deviceId = await getDeviceId(usbmuxClient, hostId);
        // Since we don't start Frida ourselves, alt port will never be used
        return usbmuxClient.createDeviceTunnel(deviceId, frida_integration_1.FRIDA_DEFAULT_PORT);
    });
}
async function getIosFridaTargets(usbmuxClient, hostId) {
    let fridaSession;
    let wasCached = false;
    try {
        ({ fridaSession, wasCached } = await getOrCreateIosFridaSession(hostId, usbmuxClient));
        return await fridaSession.enumerateApplications();
    }
    catch (e) {
        (0, frida_integration_1.clearFridaSessionCache)(fridaSessionCache, hostId);
        if (wasCached) {
            // When a cached session fails, we retry with a fresh one:
            return getIosFridaTargets(usbmuxClient, hostId);
        }
        else {
            throw e;
        }
    }
}
exports.getIosFridaTargets = getIosFridaTargets;
async function interceptIosFridaTarget(usbmuxClient, hostId, appId, caCertContent, proxyPort, enableSocks) {
    console.log(`Intercepting ${appId} via iOS Frida on ${hostId}...`);
    const deviceId = await getDeviceId(usbmuxClient, hostId);
    const fridaStream = await usbmuxClient.createDeviceTunnel(deviceId, frida_integration_1.FRIDA_DEFAULT_PORT);
    const fridaSession = await FridaJs.connect({
        stream: fridaStream
    });
    const { session } = await fridaSession.spawnPaused(appId, undefined);
    try {
        const proxyIp = await (0, frida_integration_1.testAndSelectProxyAddress)(session, proxyPort);
        const interceptionScript = await (0, frida_scripts_1.buildIosFridaScript)(caCertContent, proxyIp, proxyPort, KNOWN_APP_PROBLEMATIC_PORTS[appId] ?? [], enableSocks);
        await (0, frida_integration_1.launchScript)(`iOS (${appId})`, session, interceptionScript);
        await session.resume();
        console.log(`Frida iOS interception started: ${appId} on ${hostId} forwarding to ${proxyIp}:${proxyPort}`);
        return session;
    }
    catch (e) {
        // If anything goes wrong, just make sure we shut down the app again
        await (0, frida_integration_1.killProcess)(session).catch(console.log);
        throw e;
    }
}
exports.interceptIosFridaTarget = interceptIosFridaTarget;
//# sourceMappingURL=frida-ios-integration.js.map