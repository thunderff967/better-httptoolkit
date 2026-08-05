"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRequest = void 0;
const tslib_1 = require("tslib");
const http = tslib_1.__importStar(require("http"));
const util_1 = require("@httptoolkit/util");
const ui_operation_bridge_1 = require("./ui-operation-bridge");
async function apiRequest(method, urlPath, body) {
    const result = (0, util_1.getDeferred)();
    const socketPath = await (0, ui_operation_bridge_1.getSocketPath)();
    const req = http.request({
        method,
        path: urlPath,
        socketPath: socketPath,
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 2000
    }, (res) => {
        const chunks = [];
        res.on('error', (err) => result.reject(err));
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
            const raw = Buffer.concat(chunks).toString('utf-8');
            if (res.statusCode && res.statusCode >= 400) {
                try {
                    const body = JSON.parse(raw);
                    const message = body.message
                        || (typeof body.error === 'string' ? body.error : body.error?.message)
                        || `HTTP ${res.statusCode}`;
                    result.reject(new Error(message));
                }
                catch {
                    result.reject(new Error(`HTTP ${res.statusCode}: ${raw}`));
                }
                return;
            }
            try {
                result.resolve(JSON.parse(raw));
            }
            catch {
                result.reject(new Error(`Unparseable response: ${raw}`));
            }
        });
    });
    req.on('timeout', () => {
        req.destroy(new Error('Request timed out'));
    });
    req.on('error', (err) => {
        if (err.code === 'ECONNREFUSED' || err.code === 'ENOENT') {
            result.reject(new Error('HTTP Toolkit is not running. Start HTTP Toolkit first.'));
        }
        else {
            result.reject(err);
        }
    });
    if (body) {
        req.write(JSON.stringify(body));
    }
    req.end();
    return result;
}
exports.apiRequest = apiRequest;
//# sourceMappingURL=bridge-client.js.map