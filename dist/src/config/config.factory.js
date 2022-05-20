"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configFactory = void 0;
const lodash_1 = require("lodash");
const string_to_boolean_with_default_1 = require("../utils/string.to.boolean.with.default");
const configFactory = () => {
    return {
        config: {
            server: {
                port: envToNumberOrDefault("SERVER_PORT", 3500),
            },
            logger: {
                level: envToStringOrDefault("LOGGER_LEVEL", "debug"),
                logging: {
                    logGraphqlEntitiesRequests: true,
                    logGraphqlIntrospectionRequests: false,
                    logNonGraphqlRequests: false,
                },
            },
            kenx: {
                logging: {
                    everySql: (0, string_to_boolean_with_default_1.envToBooleanWIthDefault)("KNEX_LOGGING_EVERY_SQL", true),
                    bindings: (0, string_to_boolean_with_default_1.envToBooleanWIthDefault)("KNEX_LOGGING_BINDING", true),
                },
            },
            repo: {
                deletions: {
                    logicalDelete: (0, string_to_boolean_with_default_1.envToBooleanWIthDefault)("REPO_DELETIONS_LOGICAL_DELETE", true),
                    allowPartialDelete: (0, string_to_boolean_with_default_1.envToBooleanWIthDefault)("REPO_DELETIONS_ALLOW_PARTIAL_DELETE", true),
                },
            },
        },
    };
};
exports.configFactory = configFactory;
function envToNumberOrDefault(env, defaultValue) {
    const value = process.env[env];
    if (!value)
        return defaultValue;
    const valueNumber = (0, lodash_1.parseInt)(value);
    return valueNumber;
}
function envToStringOrDefault(env, defaultValue) {
    const value = process.env[env];
    if (!value)
        return defaultValue;
    return value;
}
//# sourceMappingURL=config.factory.js.map