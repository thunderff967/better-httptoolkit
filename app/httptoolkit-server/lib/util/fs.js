"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveFile = exports.createTmp = exports.commandExists = exports.resolveCommandPath = exports.ensureDirectoryExists = exports.getRealPath = exports.canAccess = exports.copyRecursive = exports.createWriteStream = exports.createReadStream = exports.appendOrCreateFile = exports.copyFile = exports.writeFile = exports.mkDir = exports.chmod = exports.checkAccess = exports.deleteFolder = exports.deleteFile = exports.readLink = exports.readDir = exports.readFile = exports.statFile = void 0;
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const path = tslib_1.__importStar(require("path"));
const tmp = tslib_1.__importStar(require("tmp"));
const lookpath_1 = require("lookpath");
const util_1 = require("@httptoolkit/util");
exports.statFile = fs.promises.stat;
exports.readFile = fs.promises.readFile;
exports.readDir = fs.promises.readdir;
exports.readLink = fs.promises.readlink;
exports.deleteFile = fs.promises.unlink;
const deleteFolder = (folder) => fs.promises.rm(folder, { recursive: true, force: true });
exports.deleteFolder = deleteFolder;
exports.checkAccess = fs.promises.access;
exports.chmod = fs.promises.chmod;
exports.mkDir = fs.promises.mkdir;
exports.writeFile = fs.promises.writeFile;
exports.copyFile = fs.promises.copyFile;
exports.appendOrCreateFile = fs.promises.appendFile;
exports.createReadStream = fs.createReadStream;
exports.createWriteStream = fs.createWriteStream;
const copyRecursive = async (from, to) => {
    // fs.cp is only available in Node 16.7.0+
    if (!fs.cp)
        throw new Error("fs.cp not available");
    return new Promise((resolve, reject) => {
        fs.cp(from, to, { recursive: true }, (err) => {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
};
exports.copyRecursive = copyRecursive;
const canAccess = (path) => (0, exports.checkAccess)(path).then(() => true).catch(() => false);
exports.canAccess = canAccess;
// Takes a path, follows any links present (if possible) until we reach a non-link file. This
// does *not* check that the final path is accessible - it just removes any links en route.
// This will return undefined if a target path does not resolve at all.
const getRealPath = async (targetPath) => {
    while (true) {
        try {
            const linkTarget = await (0, exports.readLink)(targetPath);
            // Links are often relative, so we need to resolve them against the link parent directory:
            targetPath = path.resolve(path.dirname(targetPath), linkTarget);
        }
        catch (e) {
            // Target file does not exist:
            if (e.code === 'ENOENT')
                return undefined;
            // Not a link, or some other error:
            else
                return targetPath;
        }
    }
};
exports.getRealPath = getRealPath;
const ensureDirectoryExists = (path) => (0, exports.checkAccess)(path).catch(() => (0, exports.mkDir)(path, { recursive: true }));
exports.ensureDirectoryExists = ensureDirectoryExists;
const resolveCommandPath = (path) => (0, lookpath_1.lookpath)(path);
exports.resolveCommandPath = resolveCommandPath;
const commandExists = (path) => (0, exports.resolveCommandPath)(path).then((result) => result !== undefined);
exports.commandExists = commandExists;
const createTmp = (options = {}) => new Promise((resolve, reject) => {
    tmp.file(options, (err, path, fd, cleanupCallback) => {
        if (err)
            return reject(err);
        resolve({ path, fd, cleanupCallback });
    });
});
exports.createTmp = createTmp;
const moveFile = async (oldPath, newPath) => {
    try {
        await fs.promises.rename(oldPath, newPath);
    }
    catch (e) {
        if ((0, util_1.isErrorLike)(e) && e.code === 'EXDEV') {
            // Cross-device - can't rename files across partions etc.
            // In that case, we fallback to copy then delete:
            await (0, exports.copyFile)(oldPath, newPath);
            await (0, exports.deleteFile)(oldPath);
        }
    }
};
exports.moveFile = moveFile;
//# sourceMappingURL=fs.js.map