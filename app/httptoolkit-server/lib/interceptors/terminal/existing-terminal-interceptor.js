"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExistingTerminalInterceptor = void 0;
const mockttp_1 = require("mockttp");
const terminal_env_overrides_1 = require("./terminal-env-overrides");
const terminal_scripts_1 = require("./terminal-scripts");
const getBashDefinition = (port) => ({
    description: "Bash-compatible",
    command: `eval "$(curl -sS localhost:${port}/setup)"`
});
const getGitBashDefinition = (port) => ({
    description: "Git Bash",
    command: `eval "$(curl -sS localhost:${port}/gb-setup)"`
});
const getFishDefinition = (port) => ({
    description: "Fish",
    command: `curl -sS localhost:${port}/fish-setup | source`
});
const getPowershellDefinition = (port) => ({
    description: "Powershell",
    command: `Invoke-Expression (Invoke-WebRequest http://localhost:${port}/ps-setup).Content`
});
function getShellCommands(port) {
    if (process.platform === 'win32') {
        return {
            'Powershell': getPowershellDefinition(port),
            'Git Bash': getGitBashDefinition(port)
        };
    }
    else {
        return {
            'Bash': getBashDefinition(port),
            'Fish': getFishDefinition(port),
            'Powershell': getPowershellDefinition(port)
        };
    }
}
class ExistingTerminalInterceptor {
    constructor(config) {
        this.config = config;
        this.servers = {};
        this.id = 'existing-terminal';
        this.version = '1.0.0';
    }
    isActivable() {
        return Promise.resolve(true);
    }
    isActive(proxyPort) {
        return this.servers[proxyPort]?.isActive ?? false;
    }
    async activate(proxyPort) {
        if (this.servers[proxyPort]) {
            // Reset isActive, so we wait again for a new request
            this.servers[proxyPort].isActive = false;
            const serverPort = this.servers[proxyPort].server.port;
            return {
                port: serverPort,
                commands: getShellCommands(serverPort)
            };
        }
        const server = (0, mockttp_1.getLocal)();
        await server.start({ startPort: proxyPort + 1, endPort: 65535 });
        const serverState = { server, isActive: false };
        const posixEnvVars = (0, terminal_env_overrides_1.getTerminalEnvVars)(proxyPort, this.config.https, 'posix-runtime-inherit');
        // Endpoints for each of the various setup scripts:
        await server.forGet('/setup').thenReply(200, (0, terminal_scripts_1.getBashShellScript)(server.urlFor('/success'), posixEnvVars), { "content-type": "text/x-shellscript" });
        await server.forGet('/gb-setup').thenReply(200, (0, terminal_scripts_1.getGitBashShellScript)(server.urlFor('/success'), posixEnvVars), { "content-type": "text/x-shellscript" });
        await server.forGet('/fish-setup').thenReply(200, (0, terminal_scripts_1.getFishShellScript)(server.urlFor('/success'), posixEnvVars), { "content-type": "application/x-fish" });
        const powerShellEnvVars = (0, terminal_env_overrides_1.getTerminalEnvVars)(proxyPort, this.config.https, 'powershell-runtime-inherit');
        await server.forGet('/ps-setup').thenReply(200, (0, terminal_scripts_1.getPowerShellScript)(server.urlFor('/success'), powerShellEnvVars), { "content-type": "text/plain" });
        // A success endpoint, so we can mark this as active (which provides some helpful UX on the frontend)
        await server.forPost('/success').thenCallback(() => {
            serverState.isActive = true;
            return { statusCode: 200 };
        });
        this.servers[proxyPort] = serverState;
        return {
            port: server.port,
            commands: getShellCommands(server.port)
        };
    }
    async deactivate(proxyPort) {
        if (this.servers[proxyPort]) {
            await this.servers[proxyPort].server.stop();
            delete this.servers[proxyPort];
        }
    }
    deactivateAll() {
        return Promise.all(Object.keys(this.servers).map((port) => this.deactivate(parseInt(port, 10)))).then(() => { });
    }
}
exports.ExistingTerminalInterceptor = ExistingTerminalInterceptor;
//# sourceMappingURL=existing-terminal-interceptor.js.map