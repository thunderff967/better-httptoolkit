"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rawHeadersToHeaders = void 0;
// In some places (Docker proxy) we use req.rawHeaders plus this logic to capture a
// usable header object that doesn't normalize headers to e.g. combine duplicates and
// lowercase names.
function rawHeadersToHeaders(rawHeaders) {
    return rawHeaders.reduce((result, next, i) => {
        if (i % 2 === 0) {
            const existingValue = result[next];
            if (typeof existingValue === 'string') {
                result[next] = [existingValue];
            }
        }
        else {
            const key = rawHeaders[i - 1];
            const existingValue = result[key];
            if (Array.isArray(existingValue)) {
                existingValue.push(next);
            }
            else {
                result[key] = next;
            }
        }
        return result;
    }, {});
}
exports.rawHeadersToHeaders = rawHeadersToHeaders;
//# sourceMappingURL=http.js.map