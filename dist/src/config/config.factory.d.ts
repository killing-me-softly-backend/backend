import { ConfigFactory } from "@nestjs/config";
export declare const configFactory: ConfigFactory<{
    config: Configuration;
}>;
export interface ServerConfig {
    port: number;
}
export interface LoggerConfig {
    level: string;
    logging: {
        logGraphqlIntrospectionRequests?: boolean;
        logGraphqlEntitiesRequests?: boolean;
        logNonGraphqlRequests?: boolean;
    };
}
export interface KnexConfig {
    logging: {
        everySql: boolean;
        bindings: boolean;
    };
}
export interface RepoConfig {
    deletions: {
        logicalDelete: boolean;
        allowPartialDelete: boolean;
    };
}
export interface Configuration {
    server: ServerConfig;
    logger: LoggerConfig;
    kenx: KnexConfig;
    repo: RepoConfig;
}
