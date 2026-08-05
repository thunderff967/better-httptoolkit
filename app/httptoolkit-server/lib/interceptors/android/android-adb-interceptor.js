"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndroidAdbInterceptor = void 0;
const adbkit_1 = require("@devicefarmer/adbkit");
const util_1 = require("@httptoolkit/util");
const mockttp_1 = require("mockttp");
const error_tracking_1 = require("../../error-tracking");
const adb_commands_1 = require("./adb-commands");
const fetch_apk_1 = require("./fetch-apk");
const certificates_1 = require("../../certificates");
const network_1 = require("../../util/network");
function urlSafeBase64(content) {
    return Buffer.from(content, 'utf8').toString('base64')
        .replace('+', '-')
        .replace('/', '_');
}
class AndroidAdbInterceptor {
    constructor(config) {
        this.config = config;
        this.id = 'android-adb';
        this.version = '1.0.0';
        this.deviceProxyMapping = {};
        this.adbClient = (0, adb_commands_1.createAdbClient)();
        this.activableTimeout = 3000; // Increase timeout for device detection slightly
    }
    async isActivable() {
        return Object.keys(await (0, adb_commands_1.getConnectedDevices)(this.adbClient)).length > 0;
    }
    isActive() {
        return false;
    }
    async getMetadata() {
        const devices = await (0, adb_commands_1.getConnectedDevices)(this.adbClient);
        return {
            deviceIds: Object.keys(devices),
            devices: devices
        };
    }
    async activate(proxyPort, options) {
        const deviceClient = new adbkit_1.DeviceClient(this.adbClient, options.deviceId);
        await this.injectSystemCertIfPossible(deviceClient, this.config.https.certContent);
        if (!(await deviceClient.isInstalled('tech.httptoolkit.android.v1'))) {
            console.log("App not installed, installing...");
            try {
                await deviceClient.install(await (0, fetch_apk_1.streamLatestApk)(this.config));
            }
            catch (e) {
                console.log("Resetting & retrying APK install, after initial failure:", e);
                // This can fail due to connection issues (with the device or while downloading
                // the APK) due to a corrupted APK. Reset the APKs and try again, just in case.
                await (0, fetch_apk_1.clearAllApks)(this.config);
                await deviceClient.install(await (0, fetch_apk_1.streamLatestApk)(this.config));
            }
            console.log("App installed successfully");
            await (0, util_1.delay)(200); // Add a little delay, to ensure intent URL is registered before we use it
        }
        // Now that the app is installed, bring it to the front (avoids issues with starting a
        // service for the VPN when in the foreground).
        await (0, adb_commands_1.bringToFront)(deviceClient, 'tech.httptoolkit.android.v1/tech.httptoolkit.android.MainActivity').catch(error_tracking_1.logError); // Not that important, so we continue if this fails somehow
        // Build a trigger URL to activate the proxy on the device:
        const setupParams = {
            addresses: adb_commands_1.EMULATOR_HOST_IPS.concat(
            // Every other external network ip
            (0, network_1.getReachableInterfaces)().filter(a => a.family === "IPv4" // Android VPN app supports IPv4 only
            ).map(a => a.address)),
            port: proxyPort,
            localTunnelPort: proxyPort,
            enableSocks: options.enableSocks ?? false,
            certFingerprint: await (0, mockttp_1.generateSPKIFingerprint)(this.config.https.certContent)
        };
        const intentData = urlSafeBase64(JSON.stringify(setupParams));
        await (0, adb_commands_1.createPersistentReverseTunnel)(deviceClient, proxyPort, proxyPort)
            .catch(() => { }); // If we can't tunnel that's OK - we'll use wifi/etc instead
        // Use ADB to launch the app with the proxy details
        await (0, adb_commands_1.startActivity)(deviceClient, {
            action: 'tech.httptoolkit.android.ACTIVATE',
            data: `https://android.httptoolkit.tech/connect/?data=${intentData}`,
            retries: 10
        });
        this.deviceProxyMapping[proxyPort] = this.deviceProxyMapping[proxyPort] || [];
        if (!this.deviceProxyMapping[proxyPort].includes(options.deviceId)) {
            this.deviceProxyMapping[proxyPort].push(options.deviceId);
        }
    }
    async deactivate(port) {
        const deviceIds = this.deviceProxyMapping[port] || [];
        return Promise.all(deviceIds.map(async (deviceId) => {
            const deviceClient = new adbkit_1.DeviceClient(this.adbClient, deviceId);
            // Bring app to the front, as otherwise it can't run intents (to tell
            // the background service to stop the VPN)
            await (0, adb_commands_1.bringToFront)(deviceClient, 'tech.httptoolkit.android.v1/tech.httptoolkit.android.MainActivity').catch(console.log); // Not that important, we continue if this fails somehow
            await deviceClient.startActivity({
                wait: true,
                action: 'tech.httptoolkit.android.DEACTIVATE'
            }).catch(console.log); // Ditto
            (0, adb_commands_1.closeReverseTunnel)(deviceClient, port, port);
        }));
    }
    async deactivateAll() {
        return Promise.all(Object.keys(this.deviceProxyMapping)
            .map(port => this.deactivate(port)));
    }
    async injectSystemCertIfPossible(deviceClient, certContent) {
        const rootCmd = await (0, adb_commands_1.getRootCommand)(deviceClient);
        if (!rootCmd) {
            console.log('Root not available, skipping cert injection');
            return;
        }
        const cert = (0, certificates_1.parseCert)(certContent);
        try {
            const subjectHash = (0, certificates_1.getCertificateSubjectHash)(cert);
            const fingerprint = (0, certificates_1.getCertificateFingerprint)(cert);
            if (!await (0, adb_commands_1.hasCertInstalled)(deviceClient, subjectHash, fingerprint)) {
                const certPath = `${adb_commands_1.ANDROID_TEMP}/${subjectHash}.0`;
                console.log(`Adding cert file as ${certPath}`);
                await (0, adb_commands_1.pushFile)(deviceClient, (0, adb_commands_1.stringAsStream)(certContent.replace('\r\n', '\n')), certPath, 0o444);
                await (0, adb_commands_1.injectSystemCertificate)(deviceClient, rootCmd, certPath)
                    .then(() => console.log('Cert injected'))
                    .catch((e) => (0, error_tracking_1.logError)(e)); // Continue but log the failure
            }
            else {
                console.log("Cert already installed, nothing to do");
            }
            const spkiFingerprint = await (0, mockttp_1.generateSPKIFingerprint)(certContent);
            // Chrome requires system certificates to use certificate transparency, which we can't do. To work
            // around this, we need to explicitly trust our certificate in Chrome:
            await (0, adb_commands_1.setChromeFlags)(deviceClient, rootCmd, [
                `--ignore-certificate-errors-spki-list=${spkiFingerprint}`
            ]);
            console.log('Android Chrome flags set');
        }
        catch (e) {
            (0, error_tracking_1.logError)(e);
        }
    }
}
exports.AndroidAdbInterceptor = AndroidAdbInterceptor;
//# sourceMappingURL=android-adb-interceptor.js.map