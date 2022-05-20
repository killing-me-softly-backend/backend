import { NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { Logger } from "winston";
import { AppConfigService } from "../config";
export declare class RequestDurationMiddleware implements NestMiddleware {
    private logger;
    private configService;
    constructor(logger: Logger, configService: AppConfigService);
    use(req: Request, res: Response, next: NextFunction): void;
}
