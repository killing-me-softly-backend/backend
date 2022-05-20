"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.childLogger = exports.loggerOptionsFactory = void 0;
const winston_1 = require("winston");
const { printf, combine, timestamp, colorize } = winston_1.format;
const consoleFormat = printf(({ level, message, timestamp, service }) => {
    return `${timestamp} [${service}] ${level}: ${message}`;
});
function loggerOptionsFactory(level) {
    const options = {
        defaultMeta: { service: "app" },
        transports: [
            new winston_1.transports.Console({
                format: combine(timestamp(), colorize(), consoleFormat),
                level,
            }),
        ],
    };
    return options;
}
exports.loggerOptionsFactory = loggerOptionsFactory;
function childLogger(logger, metadata) {
    const child = logger.child({});
    child.defaultMeta = Object.assign(Object.assign({}, logger.defaultMeta), metadata);
    return child;
}
exports.childLogger = childLogger;
//# sourceMappingURL=logger.js.map