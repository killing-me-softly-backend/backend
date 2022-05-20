import { Knex } from "knex";
import { Logger } from "winston";
export declare function knexLogger(knex: Knex, logger: Logger, logEverySql?: boolean, logBindings?: boolean): void;
