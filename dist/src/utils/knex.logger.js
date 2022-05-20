"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knexLogger = void 0;
function knexLogger(knex, logger, logEverySql = false, logBindings = false) {
    knex.on("query", function (queryData) {
        if (logEverySql) {
            if (logBindings) {
                logger.debug(`${queryData === null || queryData === void 0 ? void 0 : queryData.sql} ${JSON.stringify(queryData === null || queryData === void 0 ? void 0 : queryData.bindings)}`);
            }
            else {
                logger.info(queryData === null || queryData === void 0 ? void 0 : queryData.sql);
            }
        }
    });
}
exports.knexLogger = knexLogger;
//# sourceMappingURL=knex.logger.js.map