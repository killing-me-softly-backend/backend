import { NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { Logger } from "winston";
export declare class GraphqlExtractOperationMiddleware implements NestMiddleware {
    private logger;
    constructor(logger: Logger);
    use(req: Request, res: Response, next: NextFunction): void;
}
