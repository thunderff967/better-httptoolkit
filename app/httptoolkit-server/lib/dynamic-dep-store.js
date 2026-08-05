"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanupDependencies = exports.getDependencyStream = void 0;
const tslib_1 = require("tslib");
const path = tslib_1.__importStar(require("path"));
const stream = tslib_1.__importStar(require("stream"));
const util_1 = require("@httptoolkit/util");
const fs = tslib_1.__importStar(require("./util/fs"));
/**
 * This retrieves a stream for a dependency file, either from disk if it's already available
 * or by calling the fetch() function (and then saving the result to disk in parallel for
 * future calls).
 */
async function getDependencyStream(options) {
    const depPath = path.join(options.config.configPath, `${options.key.join('-')}${options.ext}`);
    if (await fs.canAccess(depPath)) {
        return fs.createReadStream(depPath);
    }
    const tmpDownloadPath = depPath + `.tmp-${Math.random().toString(36).slice(2)}`;
    const downloadStream = await options.fetch(options.key);
    const diskStream = fs.createWriteStream(tmpDownloadPath);
    const resultStream = new stream.PassThrough();
    downloadStream.pipe(diskStream);
    downloadStream.pipe(resultStream);
    downloadStream.on('error', (e) => {
        console.warn(`Failed to download dependency to ${depPath}:`, e);
        // Clean up the temp download file:
        diskStream.destroy();
        fs.deleteFile(tmpDownloadPath).catch(() => { });
        // Pass the error on to the client:
        resultStream.destroy(new util_1.CustomError(`${options.key.join('-')} dependency fetch failed: ${e.message ?? e}`, {
            cause: e
        }));
    });
    diskStream.on('finish', () => {
        fs.moveFile(tmpDownloadPath, depPath)
            .catch(console.warn);
    });
    return resultStream;
}
exports.getDependencyStream = getDependencyStream;
async function cleanupDependencies(options) {
    const depFiles = await fs.readDir(options.config.configPath);
    await Promise.all(depFiles.map(async (depFile) => {
        if (depFile.startsWith(options.keyPrefix + '-') &&
            (depFile.endsWith(options.ext) || depFile.includes(`${options.ext}.tmp-`)) &&
            !depFile.includes(options.versionToKeep)) {
            await fs.deleteFile(path.join(options.config.configPath, depFile)).catch((e) => {
                console.warn(`Failed to delete old dependency file ${depFile}:`, e);
            });
        }
    }));
}
exports.cleanupDependencies = cleanupDependencies;
//# sourceMappingURL=dynamic-dep-store.js.map