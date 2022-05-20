import { ConfigFactory } from '@nestjs/config';
import { envToNumberOrDefault, envToStringOrDefault } from '../utils';

export const configFactory: ConfigFactory<{ config: Configuration }> = () => {
  return {
    config: {
      server: {
        port: envToNumberOrDefault('SERVER_PORT', 3500),
      },
      logger: {
        level: envToStringOrDefault('LOGGER_LEVEL', 'debug'),
      },
      mongo: {
        uri: envToStringOrDefault(
          'MONGO_URI',
          'mongodb://localhost/killing-me-softly'
        ),
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
export interface Configuration {
  server: ServerConfig;
  logger: LoggerConfig;
  mongo: MongoConfig;
}
