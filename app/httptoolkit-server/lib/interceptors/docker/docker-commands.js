"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restartAndInjectContainer = exports.transformContainerCreationConfig = exports.isInterceptedContainer = exports.isImageAvailable = exports.getDockerHostAddress = exports.DOCKER_CONTAINER_LABEL = void 0;
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const path = tslib_1.__importStar(require("path"));
const util_1 = require("@httptoolkit/util");
const terminal_env_overrides_1 = require("../terminal/terminal-env-overrides");
const docker_compose_1 = require("./docker-compose");
const docker_data_injection_1 = require("./docker-data-injection");
// Used to label intercepted docker containers with the port of the proxy
// that's currently intercepting them.
exports.DOCKER_CONTAINER_LABEL = "tech.httptoolkit.docker.proxy";
/**
 * The path inside the container where injected files will be stored, and so the paths that
 * env vars injected into the container need to reference.
 */
const HTTP_TOOLKIT_INJECTED_PATH = '/.http-toolkit-injections';
const HTTP_TOOLKIT_INJECTED_OVERRIDES_PATH = path.posix.join(HTTP_TOOLKIT_INJECTED_PATH, 'overrides');
const HTTP_TOOLKIT_INJECTED_CA_PATH = path.posix.join(HTTP_TOOLKIT_INJECTED_PATH, 'ca.pem');
/**
 * Get the hostname that resolves to the host OS (i.e. generally: where HTTP Toolkit is running)
 * from inside containers.
 *
 * In Docker for Windows & Mac, host.docker.internal is supported automatically:
 * https://docs.docker.com/docker-for-windows/networking/#use-cases-and-workarounds
 * https://docs.docker.com/docker-for-mac/networking/#use-cases-and-workarounds
 *
 * On Linux this is _not_ supported, and we need to be more clever.
 */
function getDockerHostAddress(platform, containerMetadata) {
    if (platform === 'win32' || platform === 'darwin') {
        // On Docker Desktop, this alias always points to the host (outside the VM) IP:
        return 'host.docker.internal';
    }
    else {
        // Elsewhere (Linux) we should be able to always use the gateway address. We avoid
        // using ExtraHosts with host-gateway, because that uses /etc/hosts, and not all
        // clients use that for resolution (some use _only_ DNS lookups). IPs avoid this.
        return containerMetadata?.NetworkSettings.Gateway
            || "172.17.0.1";
    }
}
exports.getDockerHostAddress = getDockerHostAddress;
function isImageAvailable(docker, name) {
    return docker.getImage(name).inspect()
        .then(() => true)
        .catch(() => false);
}
exports.isImageAvailable = isImageAvailable;
function isInterceptedContainer(container, port) {
    return container.Config.Labels?.[exports.DOCKER_CONTAINER_LABEL] === port.toString();
}
exports.isInterceptedContainer = isInterceptedContainer;
const envArrayToObject = (envArray) => lodash_1.default.fromPairs((envArray ?? []).map((e) => {
    const equalsIndex = e.indexOf('=');
    if (equalsIndex === -1)
        throw new Error('Env var without =');
    return [e.slice(0, equalsIndex), e.slice(equalsIndex + 1)];
}));
const envObjectToArray = (envObject) => Object.keys(envObject).map(k => `${k}=${envObject[k]}`);
/**
 * Takes the config for a container, and returns the config to create the
 * same container, but fully intercepted.
 *
 * To hook the creation of any container, we need to get the full config of
 * the container (to make sure we get *all* env vars, for example) and then
 * combine that with the inter
 */
async function transformContainerCreationConfig(containerConfig, baseImageConfig, { proxyPort, certContent }) {
    // Get the container-relevant config from the image config first.
    // The image has both .Config and .ContainerConfig. The former
    // is preferred, seems that .ContainerConfig is backward compat.
    const imageContainerConfig = baseImageConfig?.Config ??
        baseImageConfig?.ContainerConfig;
    // Combine the image config with the container creation options. Most
    // fields are overridden by container config, a couple are merged:
    const currentConfig = {
        ...imageContainerConfig,
        ...containerConfig,
        Env: [
            ...(imageContainerConfig?.Env ?? []),
            ...(containerConfig.Env ?? [])
        ],
        Labels: {
            ...(imageContainerConfig?.Labels ?? {}),
            ...(containerConfig.Labels ?? {})
        }
    };
    const envVarsToInject = (0, terminal_env_overrides_1.getTerminalEnvVars)(proxyPort, { certPath: HTTP_TOOLKIT_INJECTED_CA_PATH }, envArrayToObject(currentConfig.Env), {
        httpToolkitHost: getDockerHostAddress(process.platform),
        overridePath: HTTP_TOOLKIT_INJECTED_OVERRIDES_PATH,
        targetPlatform: 'linux'
    });
    // For now, we don't inject DOCKER_HOST into the container, so we don't try to intercept DinD. It
    // should be doable in theory, but it seems complicated and of limited value.
    delete envVarsToInject['DOCKER_HOST'];
    const hostConfig = {
        ...currentConfig.HostConfig,
        // To intercept without modifying the container, we bind mount our overrides and certificate
        // files into place on top of the existing content:
        Binds: [
            ...(currentConfig.HostConfig?.Binds ?? []).filter((existingMount) => 
            // Drop any existing mounts for these folders - this allows re-intercepting containers,
            // e.g. to switch from one proxy port to another.
            !existingMount.endsWith(`:${HTTP_TOOLKIT_INJECTED_PATH}:ro`)),
            // Bind-mount the injected data volume:
            `${await (0, docker_data_injection_1.getDockerDataVolumeName)(certContent)}:${HTTP_TOOLKIT_INJECTED_PATH}:ro`,
            // ^ Note the 'ro' - untrusted containers must not be able to mess with this!
        ]
    };
    // Extend that config, injecting our custom overrides:
    return {
        ...currentConfig,
        HostConfig: hostConfig,
        Env: [
            ...(currentConfig.Env ?? []),
            ...envObjectToArray(envVarsToInject)
        ],
        Labels: {
            ...(0, docker_compose_1.transformComposeCreationLabels)(proxyPort, currentConfig.Labels),
            // Label the resulting container as intercepted by this specific proxy:
            [exports.DOCKER_CONTAINER_LABEL]: String(proxyPort)
        }
    };
}
exports.transformContainerCreationConfig = transformContainerCreationConfig;
function deriveContainerCreationConfigFromInspection(containerDetails) {
    return {
        ...containerDetails.Config,
        name: containerDetails.Name,
        // You can't reconnect all networks at creation for >1 network.
        // To avoid issues, we just reconnect all networks after creation.
        HostConfig: {
            ...containerDetails.HostConfig,
            NetworkMode: 'none'
        },
        NetworkingConfig: {}
    };
}
async function connectNetworks(docker, containerId, networks) {
    // At creation, we initially connect containers to 'none', and we have to
    // undo that before we can connect to anything else. Note that this all
    // happens before container startup, so this is invisible.
    await docker.getNetwork('none').disconnect({ Container: containerId });
    await Promise.all(Object.keys(networks).map(networkName => docker.getNetwork(networkName).connect({
        Container: containerId,
        EndpointConfig: networks[networkName]
    })));
}
async function restartAndInjectContainer(docker, containerId, { proxyPort, certContent }) {
    // We intercept containers by stopping them, cloning them, injecting our settings,
    // and then starting up the clone.
    // We could add files to hit PATH and just restart the process, but we can't change
    // env vars or entrypoints (legally... doable with manual edits...) and restarting a
    // proc might be unexpected/unsafe, whilst fresh container should be the 'normal' route.
    const container = docker.getContainer(containerId);
    const containerDetails = await container.inspect();
    await container.stop({ t: 1 }).catch((e) => {
        // Ignore already-stopped errors:
        if (e.message?.includes('container already stopped'))
            return;
        else
            throw e;
    });
    await container.remove().catch((e) => {
        if ([409, 404, 304].includes(e.statusCode)) {
            // Generally this means the container was running with --rm, so
            // it's been/being removed automatically already - that's fine!
            return;
        }
        else {
            throw e;
        }
    });
    // There can be a delay here - wait until the container disappears
    while (await container.inspect().catch(() => false)) {
        await (0, util_1.delay)(100);
    }
    // First we clone the continer, injecting our custom settings:
    const newContainer = await docker.createContainer(await transformContainerCreationConfig(
    // Get options required to directly recreate this container
    deriveContainerCreationConfigFromInspection(containerDetails), 
    // We don't need image config - inspect result has *everything*
    undefined, { proxyPort, certContent }));
    // Reconnect to all the previous container's networks:
    await connectNetworks(docker, newContainer.id, containerDetails.NetworkSettings.Networks);
    // Start everything up!
    await newContainer.start();
}
exports.restartAndInjectContainer = restartAndInjectContainer;
//# sourceMappingURL=docker-commands.js.map