"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpToolkitServerApi = void 0;
const tslib_1 = require("tslib");
const events = tslib_1.__importStar(require("events"));
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const cors_gate_1 = tslib_1.__importDefault(require("cors-gate"));
const ws_1 = require("ws");
const interceptors_1 = require("../interceptors");
const constants_1 = require("../constants");
const shutdown_1 = require("../shutdown");
const api_model_1 = require("./api-model");
const graphql_api_1 = require("./graphql-api");
const rest_api_1 = require("./rest-api");
const ui_operation_bridge_1 = require("./ui-operation-bridge");
/**
 * This file contains the core server API, used by the UI to query
 * machine state that isn't easily visible from the web (cert files,
 * network interfaces), and to launch intercepted applications
 * directly on this machine.
 *
 * This is a very powerful API! It's not far from remote code
 * execution. Because of that, access is tightly controlled:
 * - Only listens on 127.0.0.1
 * - All requests must include an acceptable Origin header, i.e.
 *   no browsers requests except from a strict whitelist of valid
 *   origins. In prod, that's just app.httptoolkit.tech.
 * - Optionally (always set in the HTK app) requires an auth
 *   token with every request, provided by $HTK_SERVER_TOKEN or
 *   --token at startup. For HTTP, this is a Bearer token in the
 *   Authorization header. For the UI WebSocket bridge, the token
 *   is sent in the initial 'auth' message after connection.
 *
 * The API is available in two formats: a simple REST-ish API,
 * and a GraphQL that exists for backward compatibility. All
 * future development will happen on the REST API, and the
 * GraphQL API will eventually be removed.
 */
class HttpToolkitServerApi extends events.EventEmitter {
    constructor(config, httpClient, getRuleParamKeys) {
        super();
        this.bridge = new ui_operation_bridge_1.UiOperationBridge(config.authToken);
        const interceptors = (0, interceptors_1.buildInterceptors)(config);
        this.server = (0, express_1.default)();
        this.server.disable('x-powered-by');
        // Allow web pages on non-local URLs (app.httptoolkit.tech, not localhost) to
        // send requests to this admin server too. Without this, those requests will
        // fail after rejected preflights in recent Chrome (from ~v102, ish? Unclear).
        this.server.use((req, res, next) => {
            if (req.headers["access-control-request-private-network"]) {
                res.setHeader("access-control-allow-private-network", "true");
            }
            next(null);
        });
        const path = require('path');
        this.server.use(express_1.default.static(path.join(__dirname, '..', '..', 'ui')));
        this.server.use((0, cors_1.default)({
            origin: constants_1.ALLOWED_ORIGINS,
            maxAge: 86400 // Cache this result for as long as possible
        }));
        this.server.use((0, cors_gate_1.default)({
            strict: false,
            allowSafe: true,
            origin: '',
            // Extend default failure response to add a helpful error body.
            failure: (_req, res, _next) => {
                res.statusCode = 403;
                res.send({ error: { message: 'Invalid CORS headers' } });
            }
        }));
        this.server.use((req, res, next) => {
            if (req.path === '/' && req.method !== 'POST') {
                // We allow only POST to GQL, because that's all we expect for GraphQL queries,
                // and this helps derisk some (admittedly unlikely) XSRF possibilities.
                res.status(405).send({
                    error: { message: 'Only POST requests are supported' }
                });
                // XSRF is less of a risk elsewhere, as REST GET endpoints don't do dangerous
                // things. Also we're enforcing Origin headers everywhere so it should be
                // impossible regardless, but better safe than sorry!
            }
            else {
                next();
            }
        });
        if (config.authToken) {
            // Optional auth token. This allows us to lock down UI/server communication further
            // when started together. The desktop generates a token every run and passes it to both.
            this.server.use((req, res, next) => {
                const authHeader = req.headers['authorization'] || '';
                const tokenMatch = authHeader.match(/Bearer (\S+)/) || [];
                const token = tokenMatch[1];
                if (token !== config.authToken) {
                    res.status(403).send({
                        error: { message: 'Valid token required' }
                    });
                }
                else {
                    next();
                }
            });
        }
        const apiModel = new api_model_1.ApiModel(config, interceptors, getRuleParamKeys, httpClient, {
            onTriggerUpdate: () => this.emit('update-requested'),
            onTriggerShutdown: () => (0, shutdown_1.shutdown)(0, 'API call')
        });
        this.server.use(express_1.default.json());
        (0, rest_api_1.exposeRestAPI)(this.server, apiModel);
        (0, graphql_api_1.exposeGraphQLAPI)(this.server, apiModel);
    }
    async start(port) {
        const socketReady = this.startBridgeApiServer();
        await new Promise((resolve, reject) => {
            const httpServer = this.server.listen(port, '127.0.0.1', () => resolve());
            httpServer.once('error', reject);
            this.attachWebSocketBridge(httpServer);
        });
        await socketReady;
    }
    attachWebSocketBridge(httpServer) {
        const wss = new ws_1.WebSocketServer({ noServer: true });
        httpServer.on('upgrade', (req, socket, head) => {
            try {
                const url = new URL(req.url, `http://localhost`);
                if (url.pathname !== '/ui-operations') {
                    socket.destroy();
                    return;
                }
                // Enforce the same origin restrictions as the REST/GraphQL API
                const origin = req.headers['origin'] || '';
                if (!constants_1.ALLOWED_ORIGINS.some(pattern => pattern.test(origin))) {
                    socket.write('HTTP/1.1 403 Forbidden\r\n\r\n');
                    socket.destroy();
                    return;
                }
                // Auth token is validated via the 'auth' WebSocket message
                // (sent immediately after connection), not during upgrade.
                wss.handleUpgrade(req, socket, head, (ws) => {
                    this.bridge.setWebSocket(ws);
                });
            }
            catch (err) {
                console.warn(`WebSocket upgrade handler error: ${err.message}`);
                socket.destroy();
            }
        });
    }
    async startBridgeApiServer() {
        try {
            const socketPath = await (0, ui_operation_bridge_1.getSocketPath)();
            await this.bridge.startApiServer(socketPath);
        }
        catch (err) {
            console.warn(`Failed to start UI Bridge socket server: ${err.message}. ` +
                `MCP & remote control will not be available.`);
        }
    }
}
exports.HttpToolkitServerApi = HttpToolkitServerApi;
;
//# sourceMappingURL=api-server.js.map