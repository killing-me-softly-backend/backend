import { ConfigFactory } from '@nestjs/config';
import { envToNumberOrDefault, envToStringOrDefault } from '../utils';

export const configFactory: ConfigFactory<{ config: Configuration }> = () => {
  return {
    config: {
      server: {
        port: envToNumberOrDefault('SERVER_PORT', 8080),
      },
      logger: {
        level: envToStringOrDefault('LOGGER_LEVEL', 'info'),
      },
      mongo: {
        uri: envToStringOrDefault(
          'MONGO_URI',
          ''
        ),
      },
      auth: {
        jwtExpireTime: envToStringOrDefault('AUTH_JWT_EXPIRE_TIME', '24h'),
      },
    },
  };
};

export interface ServerConfig {
  port: number;
}
export interface LoggerConfig {
  level: string;
}
export interface MongoConfig {
  uri: string;
}

export interface AuthConfig {
  jwtExpireTime: string;
}

export interface Configuration {
  server: ServerConfig;
  logger: LoggerConfig;
  mongo: MongoConfig;
  auth: AuthConfig;
}
