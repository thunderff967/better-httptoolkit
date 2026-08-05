"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exposeGraphQLAPI = void 0;
const tslib_1 = require("tslib");
const _ = tslib_1.__importStar(require("lodash"));
const schema_1 = require("@graphql-tools/schema");
const graphql_1 = require("graphql");
const express_1 = require("graphql-http/lib/use/express");
const graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
const typeDefs = (0, graphql_tag_1.default) `
    type Query {
        version: String!
        config: InterceptionConfig!
        interceptors: [Interceptor!]!
        interceptor(id: ID!): Interceptor!
        networkInterfaces: Json
        systemProxy: Proxy
        dnsServers(proxyPort: Int!): [String!]!
        ruleParameterKeys: [String!]!
    }

    type Mutation {
        activateInterceptor(
            id: ID!,
            proxyPort: Int!,
            options: Json
        ): Json
        deactivateInterceptor(
            id: ID!,
            proxyPort: Int!
        ): Boolean!
        triggerUpdate: Void
        shutdown: Void
    }

    type InterceptionConfig {
        certificatePath: String!
        certificateContent: String!
        certificateFingerprint: String!
    }

    type Interceptor {
        id: ID!
        version: String!
        metadata(type: MetadataType): Json

        isActivable: Boolean!
        isActive(proxyPort: Int!): Boolean!
    }

    type Proxy {
        proxyUrl: String!
        noProxy: [String!]
    }

    enum MetadataType {
        SUMMARY,
        DETAILED
    }

    scalar Json
    scalar Error
    scalar Void
`;
const buildResolvers = (apiModel) => {
    // To avoid duplicating getConfig calls (not free) we cache the first call
    // result in the context:
    const getConfig = async (context) => {
        return context.apiConfig ?? (context.apiConfig = apiModel.getConfig());
    };
    return {
        Query: {
            version: () => apiModel.getVersion(),
            interceptors: () => apiModel.getInterceptors(),
            interceptor: (_, { id }) => apiModel.getInterceptor(id),
            config: async (__, ___, context) => _.pick(await getConfig(context), [
                'certificatePath',
                'certificateContent',
                'certificateFingerprint'
            ]),
            networkInterfaces: () => apiModel.getNetworkInterfaces(),
            systemProxy: async (__, ___, context) => (await getConfig(context)).systemProxy,
            dnsServers: async (__, { proxyPort }) => apiModel.getDnsServers(proxyPort),
            ruleParameterKeys: async (__, ___, context) => (await getConfig(context)).ruleParameterKeys
        },
        Mutation: {
            activateInterceptor: async (__, { id, proxyPort, options }) => apiModel.activateInterceptor(id, proxyPort, options),
            deactivateInterceptor: async (__, { id, proxyPort, options }) => apiModel.deactivateInterceptor(id, proxyPort, options),
            triggerUpdate: () => apiModel.updateServer(),
            shutdown: () => apiModel.shutdownServer()
        },
        Interceptor: {
            isActive: async (interceptor, { proxyPort }) => {
                return apiModel.isInterceptorActive(interceptor.id, proxyPort);
            },
            metadata: async function (interceptor, { type }) {
                // Avoid re-building summary metadata (included by default). We do rebuild
                // for detailed metadata but it's not a big deal, and this just exists for
                // backward compat so a little delay isn't a problem anyway.
                if (type === 'SUMMARY' && interceptor.metadata)
                    return interceptor.metadata;
                const metadataType = type
                    ? type.toLowerCase()
                    : 'summary';
                return apiModel.getInterceptorMetadata(interceptor.id, metadataType);
            }
        },
        Json: new graphql_1.GraphQLScalarType({
            name: 'Json',
            description: 'A JSON entity, serialized as a raw object',
            serialize: (value) => value,
            parseValue: (input) => input,
            parseLiteral: () => { throw new Error('JSON literals are not supported'); }
        }),
        Void: new graphql_1.GraphQLScalarType({
            name: 'Void',
            description: 'Nothing at all',
            serialize: (value) => null,
            parseValue: (input) => null,
            parseLiteral: () => { throw new Error('Void literals are not supported'); }
        }),
        Error: new graphql_1.GraphQLScalarType({
            name: 'Error',
            description: 'An error',
            serialize: (value) => {
                const err = value;
                return JSON.stringify({
                    name: err.name,
                    message: err.message,
                    stack: err.stack
                });
            },
            parseValue: (input) => {
                let data = JSON.parse(input);
                let error = new Error();
                error.name = data.name;
                error.message = data.message;
                error.stack = data.stack;
                throw error;
            },
            parseLiteral: () => { throw new Error('Error literals are not supported'); }
        }),
    };
};
function exposeGraphQLAPI(server, apiModel) {
    const schema = (0, schema_1.makeExecutableSchema)({
        typeDefs,
        resolvers: buildResolvers(apiModel)
    });
    server.post('/', (0, express_1.createHandler)({
        schema,
        context: () => ({}) // Fresh empty context for every request
    }));
}
exports.exposeGraphQLAPI = exposeGraphQLAPI;
//# sourceMappingURL=graphql-api.js.map