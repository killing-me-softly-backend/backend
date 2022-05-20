import { Knex } from "knex";
import { Logger } from "winston";
import { AppConfigService } from "../config/app.config.service";
export declare class DalService {
    private logger;
    readonly knex: Knex;
    private configService;
    constructor(logger: Logger, knex: Knex, configService: AppConfigService);
}
