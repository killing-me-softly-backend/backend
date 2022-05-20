import { Logger, LoggerOptions } from "winston";
export declare function loggerOptionsFactory(level: string): LoggerOptions;
export interface LoggerMetadata {
    service: string;
}
export declare function childLogger(logger: Logger, metadata: LoggerMetadata): Logger;
