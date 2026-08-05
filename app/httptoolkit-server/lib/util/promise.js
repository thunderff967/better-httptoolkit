"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withTimeout = exports.TimeoutError = exports.waitUntil = void 0;
const util_1 = require("@httptoolkit/util");
async function waitUntil(delayMs, tries, test) {
    let remainingTries = tries;
    let result = remainingTries > 0 && await test();
    while (remainingTries > 0 && !result) {
        remainingTries = remainingTries - 1;
        await (0, util_1.delay)(delayMs);
        result = await test();
    }
    if (!result) {
        throw new util_1.CustomError(`Wait loop failed after ${tries} retries`, {
            code: 'wait-loop-failed'
        });
    }
    else
        return result;
}
exports.waitUntil = waitUntil;
class TimeoutError extends util_1.CustomError {
    constructor() {
        super('Timeout', { code: 'timeout' });
    }
}
exports.TimeoutError = TimeoutError;
async function withTimeout(timeoutMs, promise) {
    return Promise.race([
        promise,
        (0, util_1.delay)(timeoutMs, { unref: true })
            .then(() => { throw new TimeoutError(); })
    ]);
}
exports.withTimeout = withTimeout;
//# sourceMappingURL=promise.js.map