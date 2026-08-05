"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReachableInterfaces = void 0;
const tslib_1 = require("tslib");
const _ = tslib_1.__importStar(require("lodash"));
const os = tslib_1.__importStar(require("os"));
function getReachableInterfaces() {
    return _.flatMap(os.networkInterfaces(), (addresses, iface) => (addresses || [])
        .filter(a => !a.internal && // Loopback interfaces
        iface !== 'docker0' && // Docker default bridge interface
        !iface.startsWith('br-') && // More docker bridge interfaces
        !iface.startsWith('veth') // Virtual interfaces for each docker container
    ));
}
exports.getReachableInterfaces = getReachableInterfaces;
//# sourceMappingURL=network.js.map