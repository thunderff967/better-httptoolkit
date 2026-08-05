"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformComposeResponseLabels = exports.transformComposeCreationLabels = void 0;
const interceptionSuffix = (proxyPort) => `+httptoolkit:${proxyPort}`;
// Take a set of labels provided by a client for a new container that we're intercepting, and remap the config
// hashes so this can be used in future docker-compose commands automatically:
function transformComposeCreationLabels(proxyPort, labels) {
    // No/null labels - we don't need to do anything
    if (!labels)
        return undefined;
    // Not a docker-compose container - nothing to do here
    if (!labels['com.docker.compose.config-hash'])
        return labels;
    return {
        ...labels,
        'com.docker.compose.config-hash': labels['com.docker.compose.config-hash'] + interceptionSuffix(proxyPort)
    };
}
exports.transformComposeCreationLabels = transformComposeCreationLabels;
// Take a set of labels that we might be returning to a client, and remap the config hashes so that only
// the intercepted containers seem to be usable (so that any non-intercepted containers are recreated, not used).
function transformComposeResponseLabels(proxyPort, labels) {
    // No/null labels - we don't need to do anything
    if (!labels)
        return undefined;
    // Not a docker-compose container - nothing to do here
    if (!labels['com.docker.compose.config-hash'])
        return labels;
    const currentHash = labels['com.docker.compose.config-hash'];
    const modifiedHash = currentHash.endsWith(interceptionSuffix(proxyPort))
        ? currentHash.slice(0, -1 * interceptionSuffix(proxyPort).length)
        : currentHash + '+unintercepted';
    return {
        ...labels,
        'com.docker.compose.config-hash': modifiedHash
    };
}
exports.transformComposeResponseLabels = transformComposeResponseLabels;
//# sourceMappingURL=docker-compose.js.map