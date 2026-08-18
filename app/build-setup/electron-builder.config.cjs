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
