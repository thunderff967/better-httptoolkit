"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shutdown = exports.addShutdownHandler = exports.registerShutdownHandler = void 0;
const util_1 = require("@httptoolkit/util");
const error_tracking_1 = require("./error-tracking");
const shutdownHandlers = [];
function registerShutdownHandler() {
    process.on('SIGTERM', () => shutdown(0, 'SIGTERM'));
    process.on('SIGINT', () => shutdown(0, 'SIGINT'));
}
exports.registerShutdownHandler = registerShutdownHandler;
function addShutdownHandler(handler) {
    shutdownHandlers.push(handler);
}
exports.addShutdownHandler = addShutdownHandler;
async function shutdown(code, cause) {
    console.log(`Shutting down after ${cause}...`);
    const shutdownPromises = Promise.all(shutdownHandlers.map(async (handler) => {
        try {
            await handler();
        }
        catch (e) {
            (0, error_tracking_1.logError)(e);
        }
    }));
    await Promise.race([
        shutdownPromises,
        (0, util_1.delay)(3000) // After 3 seconds, we just close anyway, we're done.
    ]);
    process.exit(code);
}
exports.shutdown = shutdown;
//# sourceMappingURL=shutdown.js.map