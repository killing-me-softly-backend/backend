import { Knex } from "knex";
export declare function knexBatchInsertOrUpdate<T>(knex: Knex, table: string, column: string, collection: Record<string, any>[], operation: "insert" | "update"): Promise<T[]>;
