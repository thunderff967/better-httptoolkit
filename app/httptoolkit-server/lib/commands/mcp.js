"use strict";
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const os = tslib_1.__importStar(require("os"));
const path = tslib_1.__importStar(require("path"));
const readline = tslib_1.__importStar(require("readline"));
const child_process_1 = require("child_process");
const canAccess = (filePath) => fs.promises.access(filePath).then(() => true).catch(() => false);
const command_1 = require("@oclif/command");
const constants_1 = require("../constants");
function maybeBundleImport(moduleName) {
    if (constants_1.IS_PROD_BUILD || process.env.OCLIF_TS_NODE === '0') {
        return require('../../bundle/' + moduleName);
    }
    else {
        return require('../' + moduleName);
    }
}
const { apiRequest } = maybeBundleImport('api/bridge-client');
function sendJsonRpc(msg) {
    process.stdout.write(JSON.stringify(msg) + '\n');
}
function jsonRpcResult(id, result) {
    sendJsonRpc({ jsonrpc: '2.0', id, result });
}
function jsonRpcError(id, code, message) {
    sendJsonRpc({ jsonrpc: '2.0', id, error: { code, message } });
}
function operationsToMcpTools(operations) {
    return operations.map(op => ({
        name: op.name.replace(/\./g, '_'),
        description: op.description,
        inputSchema: {
            type: 'object',
            properties: op.inputSchema?.properties ?? {},
        },
        ...(op.annotations && { annotations: op.annotations })
    }));
}
const POLL_INTERVAL_MS = 5000;
const LAUNCH_TIMEOUT_MS = 30000;
const LAUNCH_POLL_MS = 500;
// Default install paths per platform. First match wins. The wrapper scripts
// (httptoolkit-mcp / .cmd) set HTK_DESKTOP_EXE explicitly, so the env var
// check below handles the normal "bundled with HTK" case.
function getDefaultHtkExeCandidates() {
    if (process.platform === 'darwin') {
        return [
            '/Applications/HTTP Toolkit.app/Contents/MacOS/HTTP Toolkit',
            path.join(os.homedir(), 'Applications/HTTP Toolkit.app/Contents/MacOS/HTTP Toolkit')
        ];
    }
    if (process.platform === 'win32') {
        const localAppData = process.env.LOCALAPPDATA;
        const programFiles = process.env.PROGRAMFILES;
        const candidates = [];
        if (localAppData) {
            candidates.push(path.join(localAppData, 'Programs', 'HTTP Toolkit', 'HTTP Toolkit.exe'));
        }
        if (programFiles) {
            candidates.push(path.join(programFiles, 'HTTP Toolkit', 'HTTP Toolkit.exe'));
        }
        return candidates;
    }
    // Linux (default for deb/rpm at least)
    return ['/opt/HTTP Toolkit/httptoolkit'];
}
async function getLaunchableHtkExePath() {
    const envPath = process.env.HTK_DESKTOP_EXE;
    if (envPath && await canAccess(envPath))
        return envPath;
    for (const candidate of getDefaultHtkExeCandidates()) {
        if (await canAccess(candidate))
            return candidate;
    }
    return null;
}
async function startHttpToolkit(log, refreshOperations) {
    // Check if it's already running (maybe it just connected since the last poll)
    await refreshOperations();
    if ((await apiRequest('GET', '/api/status').catch(() => null))?.ready) {
        await refreshOperations();
        return {
            content: [{ type: 'text', text: 'HTTP Toolkit is already running and ready.' }]
        };
    }
    const exePath = await getLaunchableHtkExePath();
    if (!exePath) {
        return {
            content: [{ type: 'text', text: 'Cannot launch HTTP Toolkit: desktop app path not available.' }],
            isError: true
        };
    }
    log('Launching HTTP Toolkit desktop app...');
    (0, child_process_1.execFile)(exePath, [], () => { });
    // Wait for the UI to connect and send operations
    const deadline = Date.now() + LAUNCH_TIMEOUT_MS;
    while (Date.now() < deadline) {
        await new Promise(resolve => setTimeout(resolve, LAUNCH_POLL_MS));
        await refreshOperations();
        try {
            const status = await apiRequest('GET', '/api/status');
            if (status?.ready) {
                log('HTTP Toolkit is ready');
                return {
                    content: [{ type: 'text', text: 'HTTP Toolkit has been launched and is ready.' }]
                };
            }
        }
        catch {
            // Server not yet available, keep waiting
        }
    }
    return {
        content: [{ type: 'text', text: 'HTTP Toolkit was launched but is not yet ready. It may still be starting up — try again in a moment.' }],
        isError: true
    };
}
async function runMcpServer() {
    const log = (msg) => process.stderr.write(`[MCP] ${msg}\n`);
    let cachedOperations = [];
    async function refreshOperations() {
        try {
            cachedOperations = await apiRequest('GET', '/api/operations');
        }
        catch {
            cachedOperations = [];
        }
    }
    // Kick off the first refresh in the background — don't block on this until
    // we actually need the tools list.
    const initialRefresh = refreshOperations();
    async function getToolsList() {
        await initialRefresh;
        if (cachedOperations.length > 0)
            return operationsToMcpTools(cachedOperations);
        // No running instance — the only available action is to launch it.
        // This tool disappears once HTTP Toolkit is running and real tools become available.
        if (await getLaunchableHtkExePath()) {
            return [{
                    name: 'start_httptoolkit',
                    description: 'HTTP Toolkit is not currently running. Call this to launch it — once started, more tools will become available.',
                    inputSchema: { type: 'object', properties: {} }
                }];
        }
        return [];
    }
    async function handleToolCall(name, args) {
        if (name === 'start_httptoolkit') {
            return startHttpToolkit(log, refreshOperations);
        }
        // Map MCP tool name back to operation name
        const matchedOp = cachedOperations.find(op => op.name.replace(/\./g, '_') === name);
        const operationName = matchedOp?.name ?? name.replace(/_/g, '.');
        try {
            const result = await apiRequest('POST', '/api/execute', {
                name: operationName,
                args,
                source: 'mcp'
            });
            if (result && !result.success && result.error) {
                return {
                    content: [{ type: 'text', text: result.error.message }],
                    isError: true
                };
            }
            return {
                content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
            };
        }
        catch (err) {
            return {
                content: [{ type: 'text', text: `Error: ${err.message}` }],
                isError: true
            };
        }
    }
    function handleMessage(msg) {
        switch (msg.method) {
            case 'initialize':
                jsonRpcResult(msg.id, {
                    protocolVersion: '2024-11-05',
                    capabilities: {
                        tools: { listChanged: true }
                    },
                    serverInfo: {
                        name: 'httptoolkit',
                        version: constants_1.SERVER_VERSION
                    }
                });
                break;
            case 'notifications/initialized':
                // Client ready — no response needed
                break;
            case 'tools/list':
                getToolsList().then(tools => {
                    jsonRpcResult(msg.id, { tools });
                }).catch(err => {
                    jsonRpcError(msg.id, -32603, err.message);
                });
                break;
            case 'tools/call': {
                const { name, arguments: callArgs } = msg.params ?? {};
                if (!name || typeof name !== 'string') {
                    jsonRpcError(msg.id, -32602, 'Missing tool name');
                    break;
                }
                log(`Tool called: ${name} with args: ${JSON.stringify(callArgs)}`);
                handleToolCall(name, callArgs ?? {}).then(result => {
                    jsonRpcResult(msg.id, result);
                }).catch(err => {
                    jsonRpcError(msg.id, -32603, err.message);
                });
                break;
            }
            default:
                if (msg.id !== undefined) {
                    jsonRpcError(msg.id, -32601, `Method not found: ${msg.method}`);
                }
                break;
        }
    }
    // Poll for operation changes
    let lastOpsKey = JSON.stringify(cachedOperations.map(o => o.name).sort());
    const pollTimer = setInterval(async () => {
        await refreshOperations();
        const newOpsKey = JSON.stringify(cachedOperations.map(o => o.name).sort());
        if (newOpsKey !== lastOpsKey) {
            lastOpsKey = newOpsKey;
            sendJsonRpc({
                jsonrpc: '2.0',
                method: 'notifications/tools/list_changed'
            });
            log('Sent tools/list_changed');
        }
    }, POLL_INTERVAL_MS);
    // Read stdin line-by-line
    const rl = readline.createInterface({ input: process.stdin, terminal: false });
    rl.on('line', (line) => {
        const trimmed = line.trim();
        if (!trimmed)
            return;
        try {
            const msg = JSON.parse(trimmed);
            handleMessage(msg);
        }
        catch {
            jsonRpcError(null, -32700, 'Parse error');
        }
    });
    rl.on('close', () => {
        clearInterval(pollTimer);
        process.exit(0);
    });
    log('MCP server started on stdio');
}
class McpCommand extends command_1.Command {
    async run() {
        this.parse(McpCommand);
        await runMcpServer();
    }
}
McpCommand.description = 'start an MCP server for HTTP Toolkit';
McpCommand.flags = {
    help: command_1.flags.help({ char: 'h' }),
    token: command_1.flags.string({
        char: 't',
        description: 'optional token to authenticate server access',
        env: 'HTK_SERVER_TOKEN'
    }),
};
module.exports = McpCommand;
//# sourceMappingURL=mcp.js.map