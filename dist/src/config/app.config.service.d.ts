import { ConfigService } from "@nestjs/config";
import { Configuration } from "./config.factory";
export declare class AppConfigService {
    private configService;
    constructor(configService: ConfigService);
    getConfig(): Configuration;
}
