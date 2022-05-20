import { Connection } from 'mongoose';
import { Logger } from 'winston';
import { AppConfigService } from '../config';
export declare class DalService {
    private logger;
    private connection;
    private configService;
    constructor(logger: Logger, connection: Connection, configService: AppConfigService);
}
