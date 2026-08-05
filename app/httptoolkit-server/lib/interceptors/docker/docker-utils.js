"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDockerAddress = exports.waitForDockerStream = void 0;
const waitForDockerStream = (docker, stream) => new Promise((resolve, reject) => {
    docker.modem.followProgress(stream, (err, stream) => {
        if (err)
            reject(err);
        const firstError = stream.find((msg) => !!msg.error);
        if (firstError)
            reject(new Error(firstError.error));
        resolve();
    });
});
exports.waitForDockerStream = waitForDockerStream;
const getDockerAddress = async (docker) => {
    // Hacky logic to reuse docker-modem's internal env + OS parsing logic to
    // work out where the local Docker host is:
    const modem = docker.modem;
    const modemSocketPath = await modem.getSocketPath();
    return modemSocketPath
        ? { socketPath: modemSocketPath }
        : { host: modem.host, port: modem.port };
};
exports.getDockerAddress = getDockerAddress;
//# sourceMappingURL=docker-utils.js.map