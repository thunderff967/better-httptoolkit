"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HideWarningServer = void 0;
const mockttp_1 = require("mockttp");
const constants_1 = require("./constants");
// The first tab that opens in a new Chrome/Edge window warns about dangerous flags.
// Closing it and immediately opening a new one is a bit cheeky, but
// is completely gets rid that, more or less invisibly:
class HideWarningServer {
    constructor(config, options = { delay: undefined }) {
        this.config = config;
        this.options = options;
        this.server = (0, mockttp_1.getLocal)();
        // Resolved once the server has seen at least once
        // request for the warning-hiding page.
        this.completedPromise = new Promise((resolve) => {
            this.server.on('request', (req) => {
                if (req.url.includes('hide-warning')) {
                    resolve();
                }
            });
        });
    }
    async start(targetUrl) {
        await this.server.start(constants_1.EPHEMERAL_PORT_RANGE);
        await this.server.forGet('/hide-warning').thenReply(200, `
            <html>
                <title>HTTP Toolkit Warning Fix</title>
                <meta charset="UTF-8" />
                <style>
                    body { background-color: #d8e2e6; }
                </style>
                <script>
                    const targetUrl = ${JSON.stringify(targetUrl)};
                    window.open(targetUrl, '_blank');

                    ${this.options.delay === undefined
            ? 'window.close();'
            // In some cases (Opera) closing too quickly can make the browser
            // crash, so we delay eeeeeever so slightly:
            : `setTimeout(() => {
                            window.close();
                        }, ${this.options.delay});`}

                </script>
                <body>
                    This page should disappear momentarily. If it doesn't, click
                    <a href="${targetUrl}">this link</a>.
                </body>
            </html>
        `, { "content-type": "text/html" });
    }
    get host() {
        return this.server.url
            .replace('https://', '');
    }
    get hideWarningUrl() {
        return this.server.url.replace(/\/?$/, '/hide-warning');
    }
    async stop() {
        await this.server.stop();
    }
}
exports.HideWarningServer = HideWarningServer;
//# sourceMappingURL=hide-warning-server.js.map