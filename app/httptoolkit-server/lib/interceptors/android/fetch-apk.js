"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamLatestApk = exports.clearAllApks = void 0;
const path = require("path");
const fs = require("fs");

async function clearAllApks(config) {
    return Promise.resolve([]);
}
exports.clearAllApks = clearAllApks;

async function streamLatestApk(config) {
    const candidatePaths = [
        path.join(__dirname, '..', '..', '..', 'assets', 'httptoolkit.apk'),
        path.join(__dirname, '..', '..', '..', 'httptoolkit.apk'),
        path.join(process.cwd(), 'httptoolkit-server', 'assets', 'httptoolkit.apk'),
        path.join(process.cwd(), 'httptoolkit-server', 'httptoolkit.apk'),
        path.join(process.cwd(), 'resources', 'app.asar.unpacked', 'httptoolkit-server', 'assets', 'httptoolkit.apk'),
        path.join(config.configPath, 'httptoolkit.apk'),
        path.join(config.configPath, 'httptoolkit-1.6.0.apk')
    ];
    for (const p of candidatePaths) {
        if (fs.existsSync(p)) {
            console.log("Serving offline bundled Android APK from path: " + p);
            return p;
        }
    }
    throw new Error("Could not find offline bundled httptoolkit.apk in assets");
}
exports.streamLatestApk = streamLatestApk;
