"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configFactory = void 0;
const utils_1 = require("../utils");
const configFactory = () => {
    return {
        config: {
            server: {
                port: (0, utils_1.envToNumberOrDefault)('SERVER_PORT', 3500),
            },
            logger: {
                level: (0, utils_1.envToStringOrDefault)('LOGGER_LEVEL', 'debug'),
            },
            mongo: {
                uri: (0, utils_1.envToStringOrDefault)('MONGO_URI', 'mongodb://localhost/killing-me-softly'),
            },
        },
    };
};
exports.configFactory = configFactory;
//# sourceMappingURL=config.factory.js.map