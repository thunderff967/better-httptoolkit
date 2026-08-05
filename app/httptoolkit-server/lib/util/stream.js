"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamToBuffer = exports.streamToArray = void 0;
function streamToArray(input) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        input.on('data', (d) => chunks.push(d));
        input.on('end', () => resolve(chunks));
        input.on('error', reject);
    });
}
exports.streamToArray = streamToArray;
;
async function streamToBuffer(input) {
    const chunks = await streamToArray(input);
    return Buffer.concat(chunks);
}
exports.streamToBuffer = streamToBuffer;
;
//# sourceMappingURL=stream.js.map