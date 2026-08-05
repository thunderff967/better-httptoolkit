"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPersistentReverseTunnel = exports.closeReverseTunnel = exports.startActivity = exports.bringToFront = exports.setChromeFlags = exports.injectSystemCertificate = exports.hasCertInstalled = exports.getRootCommand = exports.isProbablyRooted = exports.pushFile = exports.stringAsStream = exports.getConnectedDevices = exports.createAdbClient = exports.EMULATOR_HOST_IPS = exports.SYSTEM_CA_PATH = exports.ANDROID_TEMP = void 0;
const tslib_1 = require("tslib");
const stream = tslib_1.__importStar(require("stream"));
const path = tslib_1.__importStar(require("path"));
const adbkit_1 = tslib_1.__importDefault(require("@devicefarmer/adbkit"));
const util_1 = require("@httptoolkit/util");
const error_tracking_1 = require("../../error-tracking");
const promise_1 = require("../../util/promise");
const certificates_1 = require("../../certificates");
const stream_1 = require("../../util/stream");
exports.ANDROID_TEMP = '/data/local/tmp';
exports.SYSTEM_CA_PATH = '/system/etc/security/cacerts';
exports.EMULATOR_HOST_IPS = [
    '10.0.2.2',
    '10.0.3.2', // Genymotion localhost ip
];
let reportedAdbConnError = false;
function createAdbClient() {
    const client = adbkit_1.default.createClient({
        port: process.env['ANDROID_ADB_SERVER_PORT']
            ? parseInt(process.env['ANDROID_ADB_SERVER_PORT'], 10)
            : 5037,
        // The path used to start adb, if it isn't already running:
        bin: process.env['ANDROID_HOME']
            ? path.join(process.env['ANDROID_HOME'], 'platform-tools', 'adb')
            : 'adb'
    });
    if (process.platform === 'win32') {
        // If ADB is connected (=if list works) then we try to connect to 58526 automatically
        // (but asychronously) at start up. This is the local debug port for Windows
        // Subsystem for Android:
        // https://learn.microsoft.com/en-us/windows/android/wsa/#connect-to-the-windows-subsystem-for-android-for-debugging
        client.listDevices()
            .then(() => client.connect('127.0.0.1', 58526))
            .then(() => console.log('Connected to WSA via ADB'))
            .catch(() => { }); // Just best-efforts, so we ignore any failures here
    }
    // We listen for errors and report them. This only happens if adbkit completely
    // fails to handle or listen to a connection error. We'd rather report that than crash.
    client.on('error', (e) => {
        // We only report the first error though. Note that most errors will also surface
        // elsewhere, e.g. as a rejection from the relevant promise. This is mostly here
        // for weird connection errors that might appear async elsewhere.
        if (!reportedAdbConnError) {
            reportedAdbConnError = true;
            console.log('ADB connection error:', e.message ?? e);
            (0, error_tracking_1.logError)(e);
        }
    });
    return client;
}
exports.createAdbClient = createAdbClient;
// Batch async calls, so that all calls whilst one call is ongoing return the same result.
// Always uses the arguments from the first call, so this isn't safe for some cases!
const batchCalls = (fn) => {
    let ongoingCall = undefined;
    return (...args) => {
        if (!ongoingCall) {
            ongoingCall = fn(...args)
                .then((result) => {
                ongoingCall = undefined;
                return result;
            })
                .catch((error) => {
                ongoingCall = undefined;
                throw error;
            });
        }
        return ongoingCall;
    };
};
exports.getConnectedDevices = batchCalls(async (adbClient) => {
    try {
        const devices = await adbClient.listDevices();
        const deviceIds = devices
            .filter((d) => d.type !== 'offline' &&
            d.type !== 'unauthorized' &&
            !d.type.startsWith("no permissions")).map(d => d.id);
        const deviceDetails = Object.fromEntries(await Promise.all(deviceIds.map(async (id) => {
            const name = await getDeviceName(adbClient, id);
            return [id, { id, name }];
        })));
        // Clear any non-present device names from the cache
        filterDeviceNameCache(deviceIds);
        return deviceDetails;
    }
    catch (e) {
        if ((0, util_1.isErrorLike)(e) && (e.code === 'ENOENT' || // No ADB available
            e.code === 'EACCES' || // ADB available, but we aren't allowed to run it
            e.code === 'EPERM' || // Permissions error launching ADB
            e.code === 'EBADF' || // ADB launch failed do to ulimit, I think?
            e.code === 'ECONNREFUSED' || // Tried to start ADB, but still couldn't connect
            e.code === 'ENOTDIR' || // ADB path contains something that's not a directory
            e.signal === 'SIGKILL' || // In some envs 'adb start-server' is always killed (why?)
            (e.cmd && e.code) // ADB available, but "adb start-server" failed
        )) {
            if (e.code !== 'ENOENT') {
                console.log(`ADB unavailable, ${e.cmd
                    ? `${e.cmd} exited with ${e.code}`
                    : `due to ${e.code}`}`);
            }
            return {};
        }
        else {
            (0, error_tracking_1.logError)(e);
            throw e;
        }
    }
});
const cachedDeviceNames = {};
const getDeviceName = async (adbClient, deviceId) => {
    if (cachedDeviceNames[deviceId]) {
        return cachedDeviceNames[deviceId];
    }
    let deviceName;
    try {
        const device = adbClient.getDevice(deviceId);
        if (deviceId.startsWith('emulator-')) {
            const props = await device.getProperties();
            const avdName = (props['ro.boot.qemu.avd_name'] || // New emulators
                props['ro.kernel.qemu.avd_name'] // Old emulators
            )?.replace(/_/g, ' ');
            const osVersion = props['ro.build.version.release'];
            deviceName = avdName || `Android ${osVersion} emulator`;
        }
        else {
            const name = (await run(device, ['settings', 'get', 'global', 'device_name'])
                .catch(() => { }))?.trim();
            if (name && !name.startsWith('cmd: Failure calling service')) {
                deviceName = name;
            }
            else {
                const props = await device.getProperties();
                deviceName = props['ro.product.model'] || deviceId;
            }
        }
    }
    catch (e) {
        console.log(`Error getting device name for ${deviceId}`, e.message);
        deviceName = deviceId;
        // N.b. we do cache despite the error - many errors could be persistent, and it's
        // no huge problem (and more consistent) to stick with the raw id instead.
    }
    cachedDeviceNames[deviceId] = deviceName;
    return deviceName;
};
// Clear any non-connected device names from the cache (to avoid leaks, and
// so that we do update the name if they reconnect later.)
const filterDeviceNameCache = (connectedIds) => {
    Object.keys(cachedDeviceNames).forEach((id) => {
        if (!connectedIds.includes(id)) {
            delete cachedDeviceNames[id];
        }
    });
};
function stringAsStream(input) {
    const contentStream = new stream.Readable();
    contentStream._read = () => { };
    contentStream.push(input);
    contentStream.push(null);
    return contentStream;
}
exports.stringAsStream = stringAsStream;
async function run(adbClient, command, options = {
    timeout: 10000
}) {
    return Promise.race([
        adbClient.shell(command)
            .then(adbkit_1.default.util.readAll)
            .then((buffer) => buffer.toString('utf8'))
            .then((result) => {
            if (!options.skipLogging) {
                console.debug("Android command", command, "returned", `\`${result.trimEnd()}\``);
            }
            return result;
        }),
        ...(options.timeout
            ? [
                (0, util_1.delay)(options.timeout)
                    .then(() => { throw new Error(`Timeout for ADB command ${command}`); })
            ]
            : [])
    ]).catch((e) => {
        if (!options.skipLogging) {
            console.debug("Android command", command, "threw", e.message);
        }
        throw e;
    });
}
async function pushFile(adbClient, contents, path, mode) {
    const transfer = await adbClient.push(contents, path, mode);
    return new Promise((resolve, reject) => {
        transfer.on('end', resolve);
        transfer.on('error', reject);
    });
}
exports.pushFile = pushFile;
async function isProbablyRooted(deviceClient) {
    let hasSu = await run(deviceClient, ['command', '-v', 'su'], {
        timeout: 500,
        skipLogging: true
    })
        .then((result) => result.includes('/su'))
        .catch(() => false);
    if (hasSu)
        return true;
    // Check if we're currently running commands as root.
    // Requires the user to have run `adb root` beforehand
    return run(deviceClient, ['id'], {
        timeout: 500,
        skipLogging: true
    })
        .then((result) => result.includes('uid=0(root)'))
        .catch(() => false);
}
exports.isProbablyRooted = isProbablyRooted;
const runAsRootCommands = [
    // Maybe we're already root?
    (...cmd) => [...cmd],
    // Su on many physical rooted devices requires quotes. Adbkit automatically quotes
    // each argument in the array, so we just have to make it a single arg:
    (...cmd) => ['su', '-c', cmd.join(' ')],
    // But sometimes it doesn't like them, so try that too:
    (...cmd) => ['su', '-c', ...cmd],
    // 'su' as available on official emulators, no quoting of commands required:
    (...cmd) => ['su', 'root', ...cmd],
    // 'su' with a single-arg command here too, just in case:
    (...cmd) => ['su', 'root', cmd.join(' ')]
];
async function getRootCommand(adbClient) {
    const rootTestScriptPath = `${exports.ANDROID_TEMP}/htk-root-test.sh`;
    try {
        // Just running 'id' doesn't fully check certain tricky cases around how the root commands handle
        // multiple arguments etc. N.b. whoami also doesn't exist on older devices. Pushing & running
        // this script is an accurate test of which root mechanisms will actually work on this device:
        let rootTestCommand = ['sh', rootTestScriptPath];
        try {
            await pushFile(adbClient, stringAsStream(`
                set -e # Fail on error
                id # Log the current user details, to confirm if we're root
            `), rootTestScriptPath, 0o444);
        }
        catch (e) {
            console.log(`Couldn't write root test script to ${rootTestScriptPath}`, e);
            // Ok, so we can't write the test script, but let's still test for root  directly,
            // because maybe if we get root then that won't be a problem
            rootTestCommand = ['id'];
        }
        // Run our root test script with each of the possible root commands
        const rootCheckResults = await Promise.all(runAsRootCommands.map((runAsRoot) => run(adbClient, runAsRoot(...rootTestCommand), { timeout: 1000 })
            .catch((e) => console.log(e.message ?? e))
            .then((result) => ({ cmd: runAsRoot, result }))));
        // Filter to just commands that successfully printed 'uid=0(root)'
        const validRootCommands = rootCheckResults
            .filter((result) => (result.result || '').includes('uid=0(root)'))
            .map((result) => result.cmd);
        if (validRootCommands.length >= 1)
            return validRootCommands[0];
        // If no explicit root commands are available, try to restart adb in root
        // mode instead. If this works, *all* commands will run as root.
        // We prefer explicit "su" calls if possible, to limit access & side effects.
        await adbClient.root().catch((e) => {
            if ((0, util_1.isErrorLike)(e) && e.message?.includes("adbd is already running as root"))
                return;
            else
                console.log(e.message ?? e);
        });
        // Sometimes switching to root can disconnect ADB devices, so double-check
        // they're still here, and wait a few seconds for them to come back if not.
        await (0, util_1.delay)(500); // Wait, since they may not disconnect immediately
        const idResult = await (0, promise_1.waitUntil)(250, 10, () => {
            return run(adbClient, rootTestCommand, { timeout: 1000 }).catch(() => false);
        }).catch(console.log);
        return (idResult || '').includes('uid=0(root)')
            ? (...cmd) => cmd // All commands now run as root
            : undefined; // Still not root, no luck.
    }
    catch (e) {
        console.error(e);
        (0, error_tracking_1.logError)('ADB root check crashed');
        return undefined;
    }
    finally {
        // Try to clean up the root test script, just to be tidy
        run(adbClient, ['rm', '-f', rootTestScriptPath]).catch(() => { });
    }
}
exports.getRootCommand = getRootCommand;
async function hasCertInstalled(adbClient, certHash, expectedFingerprint) {
    // We have to check both of these paths. If /system exists but /apex does not, then something
    // has gone wrong and we need to reinstall the cert to fix it.
    const systemCertPath = `/system/etc/security/cacerts/${certHash}.0`;
    const apexCertPath = `/apex/com.android.conscrypt/cacerts/${certHash}.0`;
    try {
        const existingCertChecks = await Promise.all([
            adbClient.pull(systemCertPath)
                .then(async (certStream) => {
                if (await isMatchingCert(certStream, expectedFingerprint)) {
                    console.log('Matching /system cacert exists');
                    return true;
                }
                else {
                    console.log('/system cacert exists but mismatched');
                    return false;
                }
            }),
            run(adbClient, ['ls', '/apex/com.android.conscrypt'])
                .then(async (lsOutput) => {
                if (lsOutput.includes('cacerts')) {
                    const certStream = await adbClient.pull(apexCertPath);
                    if (await isMatchingCert(certStream, expectedFingerprint)) {
                        console.log('Matching /apex cacert exists');
                        return true;
                    }
                    else {
                        console.log('/apex cacert exists but mismatched');
                        return false;
                    }
                }
                else {
                    console.log('No need for /apex cacerts injection');
                    // If apex dir doesn't exist, we don't need to inject anything
                    return true;
                }
            })
        ]);
        return existingCertChecks.every(result => result === true);
    }
    catch (e) {
        // Couldn't read the cert, or some other error - either way, we probably
        // don't have a working system cert installed.
        console.log(`Couldn't detect cert via ADB: ${e.message}`);
        return false;
    }
}
exports.hasCertInstalled = hasCertInstalled;
// The device already has an HTTP Toolkit cert. But is it the right one?
const isMatchingCert = async (certStream, expectedFingerprint) => {
    // Wait until it's clear that the read is successful
    const data = await (0, stream_1.streamToBuffer)(certStream);
    // Note that due to https://github.com/DeviceFarmer/adbkit/issues/464 we may see
    // 'empty' data for files that are actually missing entirely.
    if (data.byteLength === 0)
        return false;
    const certData = data.toString('utf8');
    const existingCert = (0, certificates_1.parseCert)(certData);
    const existingFingerprint = (0, certificates_1.getCertificateFingerprint)(existingCert);
    return expectedFingerprint === existingFingerprint;
};
async function injectSystemCertificate(adbClient, runAsRoot, certificatePath) {
    const injectionScriptPath = `${exports.ANDROID_TEMP}/htk-inject-system-cert.sh`;
    // We have a challenge here. How do we add a new cert to /system/etc/security/cacerts,
    // when that's generally read-only & often hard to remount (emulators require startup
    // args to allow RW system files). Solution: mount a virtual temporary FS on top of it.
    await pushFile(adbClient, stringAsStream(`
            set -e # Fail on error

            echo "\n---\nInjecting certificate:"

            # Create a separate temp directory, to hold the current certificates
            # Without this, when we add the mount we can't read the current certs anymore.
            mkdir -p /data/local/tmp/htk-ca-copy
            chmod 700 /data/local/tmp/htk-ca-copy
            rm -rf /data/local/tmp/htk-ca-copy/*

            # Copy out the existing certificates
            if [ -d "/apex/com.android.conscrypt/cacerts" ]; then
                cp /apex/com.android.conscrypt/cacerts/* /data/local/tmp/htk-ca-copy/
            else
                cp /system/etc/security/cacerts/* /data/local/tmp/htk-ca-copy/
            fi

            # Create the in-memory mount on top of the system certs folder
            mount -t tmpfs tmpfs /system/etc/security/cacerts

            # Copy the existing certs back into the tmpfs mount, so we keep trusting them
            mv /data/local/tmp/htk-ca-copy/* /system/etc/security/cacerts/

            # Copy our new cert in, so we trust that too
            mv ${certificatePath} /system/etc/security/cacerts/

            # Update the perms & selinux context labels, so everything is as readable as before
            chown root:root /system/etc/security/cacerts/*
            chmod 644 /system/etc/security/cacerts/*

            chcon u:object_r:system_file:s0 /system/etc/security/cacerts/
            chcon u:object_r:system_file:s0 /system/etc/security/cacerts/*

            echo 'System cacerts setup completed'

            # Deal with the APEX overrides in Android 14+, which need injecting into each namespace:
            if [ -d "/apex/com.android.conscrypt/cacerts" ]; then
                echo 'Injecting certificates into APEX cacerts'

                # When the APEX manages cacerts, we need to mount them at that path too. We can't do
                # this globally as APEX mounts are namespaced per process, so we need to inject a
                # bind mount for this directory into every mount namespace.

                # First we mount for the shell itself, for completeness and so we can see this
                # when we check for correct installation on later runs
                mount --bind /system/etc/security/cacerts /apex/com.android.conscrypt/cacerts

                # First we get the Zygote process(es), which launch each app
                ZYGOTE_PID=$(pidof zygote || true)
                ZYGOTE64_PID=$(pidof zygote64 || true)
                Z_PIDS="$ZYGOTE_PID $ZYGOTE64_PID"
                # N.b. some devices appear to have both, some have >1 of each (!)

                # Apps inherit the Zygote's mounts at startup, so we inject here to ensure all newly
                # started apps will see these certs straight away:
                for Z_PID in $Z_PIDS; do
                    if [ -n "$Z_PID" ]; then
                        nsenter --mount=/proc/$Z_PID/ns/mnt -- \
                            /bin/mount --bind /system/etc/security/cacerts /apex/com.android.conscrypt/cacerts
                    fi
                done

                echo 'Zygote APEX certificates remounted'

                # Then we inject the mount into all already running apps, so they see these certs immediately.

                # Get the PID of every process whose parent is one of the Zygotes:
                APP_PIDS=$(
                    echo $Z_PIDS | \
                    xargs -n1 ps -o 'PID' -P | \
                    grep -v PID
                )

                # Inject into the mount namespace of each of those apps:
                for PID in $APP_PIDS; do
                    nsenter --mount=/proc/$PID/ns/mnt -- \
                        /bin/mount --bind /system/etc/security/cacerts /apex/com.android.conscrypt/cacerts &
                done
                wait # Launched in parallel - wait for completion here

                echo "APEX certificates remounted for $(echo $APP_PIDS | wc -w) apps"
            fi

            # Delete the temp cert directory & this script itself
            rm -r /data/local/tmp/htk-ca-copy
            rm ${injectionScriptPath}

            echo "System cert successfully injected\n---\n"
        `), injectionScriptPath, 
    // Due to an Android bug, user mode is always duplicated to group & others. We set as read-only
    // to avoid making this writable by others before we run it as root in a moment.
    // More details: https://github.com/openstf/adbkit/issues/126
    0o444);
    // Actually run the script that we just pushed above, as root
    const scriptOutput = await run(adbClient, runAsRoot('sh', injectionScriptPath));
    if (!scriptOutput.includes("System cert successfully injected")) {
        throw new Error('System certificate injection failed');
    }
}
exports.injectSystemCertificate = injectSystemCertificate;
async function setChromeFlags(adbClient, runAsRoot, flags) {
    const flagsFileContent = `chrome ${flags.join(' ')}`;
    const chromeFlagsLocations = [
        'chrome',
        'android-webview',
        'webview',
        'content-shell'
    ].flatMap((variant) => [
        `/data/local/${variant}-command-line`,
        `/data/local/tmp/${variant}-command-line`,
    ]);
    const chromeFlagsScriptPath = `${exports.ANDROID_TEMP}/htk-set-chrome-flags.sh`;
    await pushFile(adbClient, stringAsStream(`
            set -e # Fail on error

            ${chromeFlagsLocations.map((flagsFilePath) => `
            echo "${flagsFileContent}" > "${flagsFilePath}"
            chmod 744 "${flagsFilePath}"
            chcon "u:object_r:shell_data_file:s0" "${flagsFilePath}"`).join('\n')}

            rm ${chromeFlagsScriptPath}

            echo "Chrome flags script completed"
        `), chromeFlagsScriptPath, 
    // Due to an Android bug, user mode is always duplicated to group & others. We set as read-only
    // to avoid making this writable by others before we run it as root in a moment.
    // More details: https://github.com/openstf/adbkit/issues/126
    0o444);
    // Actually run the script that we just pushed above, as root
    const scriptOutput = await run(adbClient, runAsRoot('sh', chromeFlagsScriptPath));
    console.log(scriptOutput);
    // Try to restart chrome, now that the flags have probably been changed:
    await run(adbClient, runAsRoot('am', 'force-stop', 'com.android.chrome')).catch(() => { });
}
exports.setChromeFlags = setChromeFlags;
async function bringToFront(adbClient, activityName // Of the form: com.package/com.package.YourActivity
) {
    // Wake the device up, so it's at least obviously locked if locked.
    // It's not possible to unlock the device over ADB. Does nothing if already awake.
    await run(adbClient, [
        "input", "keyevent", "KEYCODE_WAKEUP"
    ], { skipLogging: true });
    await (0, util_1.delay)(10);
    // Bring the activity to the front, so we can interact with it (this will
    // silently fail if the device is locked, but we're ok with that).
    await run(adbClient, [
        "am", "start", "--activity-single-top", activityName
    ], { skipLogging: true });
}
exports.bringToFront = bringToFront;
async function startActivity(adbClient, options) {
    const retries = options.retries ?? 0;
    try {
        await adbClient.startActivity({
            wait: true,
            action: options.action,
            data: options.data
        });
    }
    catch (e) {
        if (retries <= 0)
            throw e;
        else {
            await (0, util_1.delay)(1000);
            return startActivity(adbClient, {
                ...options,
                retries: retries - 1
            });
        }
    }
}
exports.startActivity = startActivity;
const adbTunnelIds = {};
function closeReverseTunnel(adbClient, localPort, remotePort) {
    const id = `${adbClient.serial}:${localPort}->${remotePort}`;
    const tunnelInterval = adbTunnelIds[id];
    if (!tunnelInterval)
        return;
    // This ensures the interval maintaining the tunnel stops:
    clearInterval(tunnelInterval);
    delete adbTunnelIds[id];
}
exports.closeReverseTunnel = closeReverseTunnel;
async function createPersistentReverseTunnel(adbClient, localPort, remotePort, options = { maxFailures: 5, delay: 2000 } // 10 seconds total
) {
    const id = `${adbClient.serial}:${localPort}->${remotePort}`;
    await adbClient.reverse('tcp:' + localPort, 'tcp:' + remotePort);
    // This tunnel can break in quite a few days, notably when connecting/disconnecting
    // from the VPN app with a wifi connection, or when ADB is restarted, when using flaky
    // cables, or switching ADB into root mode, etc etc. This is a problem!
    // To handle this, we constantly reinforce the tunnel while HTTP Toolkit is running &
    // the device is connected, until it actually persistently fails.
    // If tunnel is already being maintained elsewhere, no need to repeat (although we
    // do re-create it above, just in case there's any flakiness at this exact moment)
    if (adbTunnelIds[id])
        return;
    let tunnelConnectFailures = 0;
    const tunnelCheckInterval = adbTunnelIds[id] = setInterval(async () => {
        if (adbTunnelIds[id] !== tunnelCheckInterval) {
            clearInterval(tunnelCheckInterval);
            return;
        }
        try {
            // Repeated calls to do this do nothing if the tunnel is already in place
            await adbClient.reverse('tcp:' + remotePort, 'tcp:' + localPort);
            tunnelConnectFailures = 0;
        }
        catch (e) {
            tunnelConnectFailures += 1;
            console.log(`${id} ADB tunnel failed`, (0, util_1.isErrorLike)(e) ? e.message : e);
            if (tunnelConnectFailures >= options.maxFailures) {
                // After 10 seconds disconnected, give up
                console.warn(`${id} tunnel disconnected`);
                delete adbTunnelIds[id];
                clearInterval(tunnelCheckInterval);
            }
        }
    }, options.delay);
    tunnelCheckInterval.unref(); // Don't let this block shutdown
}
exports.createPersistentReverseTunnel = createPersistentReverseTunnel;
//# sourceMappingURL=adb-commands.js.map