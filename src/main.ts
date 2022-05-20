import { NestFactory } from "@nestjs/core";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { Logger } from "winston";
import { AppModule } from "./app.module";

import { INestApplication, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Configuration } from "./config/config.factory";
import { GqlExceptionStackTraceFilter } from "./common/exceptions.filter/exception.filter";

async function bootstrap() {
  let app: INestApplication;
  try {
    app = await NestFactory.create(AppModule);
  } catch (error) {
    console.error(`nest factory error ${error}`);
  }
  const logger = app.get<Logger>(WINSTON_MODULE_PROVIDER);
  const port = app.get(ConfigService).get<Configuration>("config").server.port;
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new GqlExceptionStackTraceFilter());
  try {
    await app.listen(port);
    logger.info(`Application is running on: ${await app.getUrl()}`);
  } catch (error) {
    logger.error(`nest factory error ${error}`);
  }
}
bootstrap();
