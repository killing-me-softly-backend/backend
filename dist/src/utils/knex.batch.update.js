"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.knexBatchInsertOrUpdate = void 0;
const lodash_1 = __importDefault(require("lodash"));
async function knexBatchInsertOrUpdate(knex, table, column, collection, operation) {
    const trx = await knex.transaction();
    try {
        const res = await Promise.all(collection.map((tuple) => {
            const value = tuple[column];
            delete tuple[column];
            const query = knex(table)
                .where(column, value)
                .returning("*")
                .transacting(trx);
            if (operation === "insert") {
                query.insert(tuple);
            }
            if (operation === "update") {
                query.update(tuple);
            }
            return query;
        }));
        await trx.commit();
        return lodash_1.default.flatten(res);
    }
    catch (error) {
        await trx.rollback();
        return [];
    }
}
exports.knexBatchInsertOrUpdate = knexBatchInsertOrUpdate;
//# sourceMappingURL=knex.batch.update.js.map