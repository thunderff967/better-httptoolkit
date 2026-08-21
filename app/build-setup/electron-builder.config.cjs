// Clean unsigned builder configuration (preserves production naming)
const packageJson = require('../package.json');
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');

const config = packageJson.build;

console.log('\nBuilding in UNSIGNED mode (Clean production naming)\n');

config.mac.forceCodeSigning = false;
config.mac.notarize = false;
config.win.forceCodeSigning = false;
config.win.target = ["nsis", "portable"];
config.npmRebuild = false;
config.nodeGypRebuild = false;
if (config.win.azureSignOptions) {
  delete config.win.azureSignOptions;
}
process.env.CSC_IDENTITY_AUTO_DISCOVERY = 'false';

config.afterPack = async (context) => {
    console.log("Running afterPack hook to install server dependencies...");
    const unpackedServerPath = path.join(context.appOutDir, 'resources', 'app.asar.unpacked', 'httptoolkit-server');
    if (fs.existsSync(unpackedServerPath)) {
        console.log(`Installing dependencies in ${unpackedServerPath}`);
        execSync('npm install --ignore-scripts --omit=dev', { cwd: unpackedServerPath, stdio: 'inherit' });

        // Copy offline APK to app.asar.unpacked (ensures it is packaged in both Setup and Portable builds)
        const apkSrc = path.join(context.packager.projectDir, 'httptoolkit-server', 'assets', 'httptoolkit.apk');
        const apkDest1 = path.join(unpackedServerPath, 'assets', 'httptoolkit.apk');
        const apkDest2 = path.join(unpackedServerPath, 'httptoolkit.apk');
        
        if (fs.existsSync(apkSrc)) {
            console.log(`Copying offline APK into packed build from: ${apkSrc}`);
            fs.mkdirSync(path.dirname(apkDest1), { recursive: true });
            fs.copyFileSync(apkSrc, apkDest1);
            fs.copyFileSync(apkSrc, apkDest2);
            console.log("Offline APK packaged successfully.");
        } else {
            console.warn(`Warning: Offline APK source not found at: ${apkSrc}`);
        }

        // Download prebuilt NAPI binaries for native modules (skipped by --ignore-scripts)
        const nativeModules = ['node-datachannel', 'registry-js'];
        const prebuildInstallBin = path.join(unpackedServerPath, 'node_modules', 'prebuild-install', 'bin.js');
        if (fs.existsSync(prebuildInstallBin)) {
            for (const mod of nativeModules) {
                const modPath = path.join(unpackedServerPath, 'node_modules', mod);
                if (fs.existsSync(modPath)) {
                    console.log(`Downloading prebuilt binary for ${mod}...`);
                    try {
                        execSync(`node "${prebuildInstallBin}" --runtime napi`, {
                            cwd: modPath,
                            stdio: 'inherit'
                        });
                    } catch (e) {
                        console.warn(`Warning: Could not download prebuilt binary for ${mod}: ${e.message}`);
                    }
                }
            }
        }
    } else {
        console.log("Server directory not found in app.asar.unpacked!");
    }
};

module.exports = config;
