"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenPairedRawHeaders = exports.pairFlatRawHeaders = exports.HttpClient = void 0;
const tslib_1 = require("tslib");
const _ = tslib_1.__importStar(require("lodash"));
const stream = tslib_1.__importStar(require("stream"));
const tls = tslib_1.__importStar(require("tls"));
const http = tslib_1.__importStar(require("http"));
const https = tslib_1.__importStar(require("https"));
const passthrough_handling_1 = require("mockttp/dist/rules/passthrough-handling");
const http_agents_1 = require("mockttp/dist/rules/http-agents");
const url_1 = require("mockttp/dist/util/url");
const client_types_1 = require("./client-types");
const fs = tslib_1.__importStar(require("../util/fs"));
class HttpClient {
    constructor(ruleParameters) {
        this.ruleParameters = ruleParameters;
        this.getDns = _.memoize((dnsServers) => {
            if (!dnsServers?.length)
                return undefined;
            return (0, passthrough_handling_1.getDnsLookupFunction)({ servers: dnsServers });
        }, (dnsServers) => 
        // Quick & easy memoize key:
        JSON.stringify(dnsServers));
    }
    getProxyConfig(proxyConfig) {
        if (!proxyConfig)
            return undefined;
        if (_.isArray(proxyConfig)) {
            return proxyConfig.map((config) => this.getProxyConfig(config));
        }
        if (client_types_1.RULE_PARAM_REF_KEY in proxyConfig) {
            const referencedConfig = this.ruleParameters[proxyConfig[client_types_1.RULE_PARAM_REF_KEY]];
            if (!referencedConfig) {
                throw new Error('Request options referenced unrecognized rule parameter in proxy config');
            }
            return referencedConfig;
        }
        return proxyConfig;
    }
    async sendRequest(requestDefn, options) {
        const url = new URL(requestDefn.url);
        // Each option here should closely match the behaviour of the passthrough rules. We delegate
        // calculation of option values as much as possible to the UI, even where somewhat possible
        // here, since the UI controls the passthrough options directly already.
        const effectivePort = (0, url_1.getEffectivePort)(url);
        const additionalCAs = options.additionalTrustedCAs || options.trustAdditionalCAs;
        const agent = await (0, http_agents_1.getAgent)({
            protocol: url.protocol,
            hostname: url.hostname,
            port: effectivePort,
            proxySettingSource: this.getProxyConfig(options.proxyConfig),
            tryHttp2: false,
            keepAlive: false
        });
        const request = (url.protocol === 'https:' ? https : http).request(requestDefn.url, {
            method: requestDefn.method,
            signal: options.abortSignal,
            setDefaultHeaders: false,
            headers: flattenPairedRawHeaders(requestDefn.headers),
            // Low-level connection configuration:
            agent,
            lookup: this.getDns(options.lookupOptions?.servers),
            // TLS options (should be effectively identical to Mockttp's passthrough config)
            ...(0, passthrough_handling_1.getUpstreamTlsOptions)({
                hostname: url.hostname,
                port: effectivePort,
                ignoreHostHttpsErrors: options.ignoreHostHttpsErrors ?? [],
                clientCertificateHostMap: options.clientCertificate
                    ? { '*': options.clientCertificate }
                    : {},
                trustedCAs: additionalCAs
                    ? tls.rootCertificates.concat(additionalCAs.map(({ cert }) => cert))
                    : undefined
            })
        }); // Would be nice to avoid this but raw header options aren't in the types yet
        if (options.keyLogFile) {
            request.on('socket', (socket) => {
                socket.on('keylog', (line) => fs.appendOrCreateFile(options.keyLogFile, line));
            });
        }
        options.abortSignal?.addEventListener('abort', () => {
            // In older Node versions, this seems to be required to _actually_ abort the request:
            request.abort();
        });
        if (requestDefn.rawBody?.byteLength) {
            request.end(requestDefn.rawBody);
        }
        else {
            request.end();
        }
        const resultsStream = new stream.Readable({
            objectMode: true,
            read() { } // Can't pull data - we manually fill this with .push() instead.
        });
        resultsStream.push({
            type: 'request-start',
            startTime: Date.now(),
            timestamp: performance.now()
        });
        new Promise((resolve, reject) => {
            request.on('error', reject);
            request.on('response', resolve);
        }).then((response) => {
            resultsStream.push({
                type: 'response-head',
                statusCode: response.statusCode,
                statusMessage: response.statusMessage,
                headers: pairFlatRawHeaders(response.rawHeaders),
                timestamp: performance.now()
            });
            response.on('data', (data) => resultsStream.push({
                type: 'response-body-part',
                rawBody: data,
                timestamp: performance.now()
            }));
            response.on('end', () => {
                if (response.rawTrailers?.length) {
                    resultsStream.push({
                        type: 'response-trailers',
                        trailers: pairFlatRawHeaders(response.rawTrailers),
                        timestamp: performance.now()
                    });
                }
                resultsStream.push({ type: 'response-end', timestamp: performance.now() });
                resultsStream.push(null);
            });
            response.on('error', (error) => resultsStream.destroy(error));
        }).catch((error) => {
            resultsStream.destroy(error);
            request.destroy();
        });
        return resultsStream;
    }
}
exports.HttpClient = HttpClient;
/**
 * Turn node's _very_ raw headers ([k, v, k, v, ...]) into our slightly more convenient
 * pairwise tuples [[k, v], [k, v], ...] RawHeaders structure.
 */
function pairFlatRawHeaders(flatRawHeaders) {
    const result = [];
    for (let i = 0; i < flatRawHeaders.length; i += 2 /* Move two at a time */) {
        result[i / 2] = [flatRawHeaders[i], flatRawHeaders[i + 1]];
    }
    return result;
}
exports.pairFlatRawHeaders = pairFlatRawHeaders;
/**
 * Turn our raw headers [[k, v], [k, v], ...] tuples into Node's very flat
 * [k, v, k, v, ...] structure.
 */
function flattenPairedRawHeaders(rawHeaders) {
    return rawHeaders.flat();
}
exports.flattenPairedRawHeaders = flattenPairedRawHeaders;
//# sourceMappingURL=http-client.js.map