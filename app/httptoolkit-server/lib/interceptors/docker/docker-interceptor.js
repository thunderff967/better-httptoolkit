"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerContainerInterceptor = void 0;
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const dockerode_1 = tslib_1.__importDefault(require("dockerode"));
const docker_commands_1 = require("./docker-commands");
const docker_interception_services_1 = require("./docker-interception-services");
class DockerContainerInterceptor {
    constructor(config) {
        this.config = config;
        this.id = "docker-attach";
        this.version = "1.0.0";
    }
    getDocker() {
        if (!this._docker) {
            this._docker = new dockerode_1.default();
        }
        return this._docker;
    }
    async isActivable() {
        return (0, docker_interception_services_1.isDockerAvailable)();
    }
    async getContainers() {
        if (!this._containersPromise) {
            // We cache the containers query whilst it's active, because this gets hit a lot,
            // usually directly in parallel by getMetadata and isActive, and this ensures
            // that concurrent calls all just run one lookup and use the same result.
            this._containersPromise = this.getDocker().listContainers({
                all: true
            }).finally(() => { this._containersPromise = undefined; });
        }
        return this._containersPromise;
    }
    async getMetadata() {
        if (!await this.isActivable())
            return;
        return {
            targets: (0, lodash_1.default)(await this.getContainers()).map((containerData) => ({
                // Keep the docker data structure, but normalize the key names and filter
                // to just the relevant data, just to make sure we don't unnecessarily
                // expose secrets or similar.
                id: containerData.Id,
                names: containerData.Names,
                command: containerData.Command,
                labels: containerData.Labels ?? {},
                state: containerData.State,
                status: containerData.Status,
                image: containerData.Image,
                ips: Object.values(containerData.NetworkSettings?.Networks ?? {})
                    .map(network => network.IPAddress)
            }))
                .keyBy('id')
                .valueOf()
        };
    }
    async activate(proxyPort, options) {
        const interceptionSettings = {
            interceptionType: 'mount',
            proxyPort,
            certContent: this.config.https.certContent,
            certPath: this.config.https.certPath,
        };
        (0, docker_interception_services_1.ensureDockerServicesRunning)(proxyPort);
        await (0, docker_commands_1.restartAndInjectContainer)(this.getDocker(), options.containerId, interceptionSettings);
    }
    async isActive(proxyPort) {
        if (!await this.isActivable())
            return false;
        return Object.values((await this.getContainers())).some((target) => target.Labels?.[docker_commands_1.DOCKER_CONTAINER_LABEL] === proxyPort.toString());
    }
    async deactivate(proxyPort) {
        if (!await (0, docker_interception_services_1.isDockerAvailable)())
            return;
        await (0, docker_interception_services_1.deleteAllInterceptedDockerData)(proxyPort);
    }
    async deactivateAll() {
        if (!await (0, docker_interception_services_1.isDockerAvailable)())
            return;
        await (0, docker_interception_services_1.deleteAllInterceptedDockerData)('all');
    }
}
exports.DockerContainerInterceptor = DockerContainerInterceptor;
//# sourceMappingURL=docker-interceptor.js.map