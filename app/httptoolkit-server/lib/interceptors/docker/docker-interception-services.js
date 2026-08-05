"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllInterceptedDockerData = exports.stopDockerInterceptionServices = exports.ensureDockerServicesRunning = exports.startDockerInterceptionServices = exports.isDockerAvailable = void 0;
const tslib_1 = require("tslib");
const dockerode_1 = tslib_1.__importDefault(require("dockerode"));
const error_tracking_1 = require("../../error-tracking");
const shutdown_1 = require("../../shutdown");
const docker_utils_1 = require("./docker-utils");
const docker_build_injection_1 = require("./docker-build-injection");
const docker_commands_1 = require("./docker-commands");
const dns_server_1 = require("../../dns-server");
const docker_networking_1 = require("./docker-networking");
const docker_proxy_1 = require("./docker-proxy");
const docker_tunnel_proxy_1 = require("./docker-tunnel-proxy");
const docker_data_injection_1 = require("./docker-data-injection");
let dockerAvailableCache;
const isDockerAvailable = (options = {}) => {
    if (dockerAvailableCache)
        return dockerAvailableCache;
    else {
        dockerAvailableCache = (async () => {
            return new dockerode_1.default().info();
        })()
            .then((info) => {
            if (info.OSType === 'windows') {
                // We don't support Windows containers yet (and I think they're very rarely
                // used anyway) so we treat Windows-mode Docker as unavailable:
                throw new Error("Docker running in Windows container mode - not supported");
            }
            else {
                return true;
            }
        })
            .catch((error) => {
            if (options.logError)
                console.warn('Docker not available:', error.message);
            return false;
        });
        // Cache the resulting status for 3 seconds:
        setTimeout(() => { dockerAvailableCache = undefined; }, 3000);
        return dockerAvailableCache;
    }
};
exports.isDockerAvailable = isDockerAvailable;
const IPv4_IPv6_PREFIX = "::ffff:";
// On shutdown, clean up every container & image that we created, disappearing
// into the mist as if we were never here...
// (Those images/containers are unusable without us, so leaving them breaks things).
(0, shutdown_1.addShutdownHandler)(async () => {
    if (!await (0, exports.isDockerAvailable)())
        return;
    await deleteAllInterceptedDockerData('all');
});
async function startDockerInterceptionServices(proxyPort, httpsConfig, ruleParameters) {
    // For now we don't support SSH-based Docker connections at all - for starters,
    // they won't be able to use the file system references we set up. If you try
    // to set one, we just ignore it.
    if (process.env.DOCKER_HOST?.startsWith('ssh://')) {
        console.log(`Ignoring unsupported DOCKER_HOST value: ${process.env.DOCKER_HOST}`);
        delete process.env.DOCKER_HOST;
    }
    // Log if Docker was not available at proxy start, and why, for debugging later:
    (0, exports.isDockerAvailable)({ logError: true }).then(async (isAvailable) => {
        if (isAvailable) {
            const dockerAddress = await (0, docker_utils_1.getDockerAddress)(new dockerode_1.default());
            console.log(`Connected to Docker at ${'socketPath' in dockerAddress
                ? dockerAddress.socketPath
                : `tcp://${dockerAddress.host}:${dockerAddress.port}`}`);
        }
        // logError:true will log the specific not-available error, if this failed
    });
    const networkMonitor = (0, docker_networking_1.monitorDockerNetworkAliases)(proxyPort);
    ruleParameters[`docker-tunnel-proxy-${proxyPort}`] = async ({ hostname }) => {
        hostname = hostname.startsWith(IPv4_IPv6_PREFIX)
            ? hostname.slice(IPv4_IPv6_PREFIX.length)
            : hostname;
        if ((await networkMonitor)?.dockerRoutedAliases.has(hostname)) {
            return {
                proxyUrl: `socks5://127.0.0.1:${await (0, docker_tunnel_proxy_1.getDockerTunnelPort)(proxyPort)}`
            };
        }
    };
    console.log(`Created docker-tunnel-proxy-${proxyPort}`);
    await Promise.all([
        // Proxy all terminal Docker API requests, to rewrite & add injection:
        (0, docker_proxy_1.ensureDockerProxyRunning)(proxyPort, httpsConfig),
        // Ensure the DNS server is running to handle unresolvable container addresses:
        (0, dns_server_1.getDnsServer)(proxyPort),
        // Monitor the intercepted containers, to resolve their names in our DNS:
        networkMonitor,
        // Prepare (pull) the tunnel image (but don't actually start the tunnel itself until
        // Docker activity happens - e.g. proxy use, container attach, or an intercepted
        // container connecting to a network):
        (0, docker_tunnel_proxy_1.prepareDockerTunnel)(),
        // Create a Docker volume, containing our cert and the override files:
        (0, docker_data_injection_1.ensureDockerInjectionVolumeExists)(httpsConfig.certContent)
    ]);
}
exports.startDockerInterceptionServices = startDockerInterceptionServices;
async function ensureDockerServicesRunning(proxyPort) {
    await Promise.all([
        (0, docker_networking_1.monitorDockerNetworkAliases)(proxyPort),
        (0, docker_tunnel_proxy_1.ensureDockerTunnelRunning)(proxyPort),
        (0, dns_server_1.getDnsServer)(proxyPort),
        // We don't double-check on the injection volume here - that's
        // checked separately at the point of use instead.
    ]).catch(error_tracking_1.logError);
}
exports.ensureDockerServicesRunning = ensureDockerServicesRunning;
async function stopDockerInterceptionServices(proxyPort, ruleParameters) {
    (0, docker_proxy_1.stopDockerProxy)(proxyPort);
    (0, docker_networking_1.stopMonitoringDockerNetworkAliases)(proxyPort);
    await deleteAllInterceptedDockerData(proxyPort);
    delete ruleParameters[`docker-tunnel-proxy-${proxyPort}`];
    console.log(`Removed docker-tunnel-proxy-${proxyPort}`);
    // Note that we _don't_ drop the data volume, we're OK with leaving that
    // around since it's invisible, tiny, and mildly expensive (a few seconds)
    // to recreate.
}
exports.stopDockerInterceptionServices = stopDockerInterceptionServices;
// Batch deactivations - if we're already shutting down, don't shut down again until
// the previous shutdown completes.
const pendingDeactivations = {};
// When a Docker container or the whole server shuts down, we do our best to delete
// every remaining intercepted image or container. None of these will be usable
// without us anyway, as they all depend on HTTP Toolkit for connectivity.
async function deleteAllInterceptedDockerData(proxyPort) {
    if (pendingDeactivations[proxyPort])
        return pendingDeactivations[proxyPort];
    if (!await (0, exports.isDockerAvailable)())
        return;
    return pendingDeactivations[proxyPort] = Promise.all([
        (0, docker_tunnel_proxy_1.stopDockerTunnel)(proxyPort),
        (async () => {
            const docker = new dockerode_1.default();
            const containers = await docker.listContainers({
                all: true,
                filters: JSON.stringify({
                    label: [
                        proxyPort === 'all'
                            ? docker_commands_1.DOCKER_CONTAINER_LABEL
                            : `${docker_commands_1.DOCKER_CONTAINER_LABEL}=${proxyPort}`
                    ]
                })
            });
            await Promise.all(containers.map(async (containerData) => {
                const container = docker.getContainer(containerData.Id);
                // Best efforts clean stop & remove:
                await container.stop({ t: 1 }).catch(() => { });
                await container.remove({ force: true }).catch(() => { });
            }));
            // We clean up images after containers, in case some containers depended
            // on some images that we intercepted.
            const images = await docker.listImages({
                all: true,
                filters: JSON.stringify({
                    label: [
                        proxyPort === 'all'
                            ? docker_build_injection_1.DOCKER_BUILD_LABEL
                            : `${docker_build_injection_1.DOCKER_BUILD_LABEL}=${proxyPort}`
                    ]
                })
            });
            await Promise.all(images.map(async (imageData) => {
                await docker.getImage(imageData.Id).remove().catch(() => { });
            }));
            // Unmark this deactivation as pending
            delete pendingDeactivations[proxyPort];
        })()
    ]);
}
exports.deleteAllInterceptedDockerData = deleteAllInterceptedDockerData;
//# sourceMappingURL=docker-interception-services.js.map