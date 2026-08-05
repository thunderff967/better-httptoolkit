"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_VERSION = exports.EPHEMERAL_PORT_RANGE = exports.MOCKTTP_ALLOWED_ORIGINS = exports.ALLOWED_ORIGINS = exports.APP_ROOT = exports.IS_PROD_BUILD = void 0;
const tslib_1 = require("tslib");
const path = tslib_1.__importStar(require("path"));
exports.IS_PROD_BUILD = !!process.env.HTTPTOOLKIT_SERVER_BINPATH;
// Notably, for this file, this is the same when either bundled or unbundled.
// That's not true for most other files! Everything should use this instead of __dirname:
exports.APP_ROOT = path.join(__dirname, '..');
exports.ALLOWED_ORIGINS = [
    /^https:\/\/app\.httptoolkit\.tech$/,
    /^http:\/\/127\.0\.0\.1(:\d+)?$/,
    /^http:\/\/localhost(:\d+)?$/
];
exports.MOCKTTP_ALLOWED_ORIGINS = [
    ...exports.ALLOWED_ORIGINS,
    // The Chromium webextension is allowed to make requests from the
    // browser directly into the Mockttp admin API (but not into our API server).
    'chrome-extension://oeehdgfohghfelggpifolochpnkdmpog'
];
// The range of ports that should be used by invisible ephemeral services, such as Firefox's
// certificate check server and Chrome's "hide warning" server. These ports are extra likely
// not to conflict with normal user usage, and are specifically designated by the IANA for
// use for dynamic ports.
exports.EPHEMERAL_PORT_RANGE = { startPort: 49152, endPort: 65535 };
exports.SERVER_VERSION = require('../package.json').version;
//# sourceMappingURL=constants.js.map