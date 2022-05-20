import { ConfigFactory } from '@nestjs/config';
export declare const configFactory: ConfigFactory<{
    config: Configuration;
}>;
export interface ServerConfig {
    port: number;
}
export interface LoggerConfig {
    level: string;
}
export interface MongoConfig {
    uri: string;
}
export interface Configuration {
    server: ServerConfig;
    logger: LoggerConfig;
    mongo: MongoConfig;
}
