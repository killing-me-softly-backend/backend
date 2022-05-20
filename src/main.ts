import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { AppModule } from './app.module';
import { AppConfigService } from './config';

async function bootstrap() {
  let app: INestApplication;
  let logger: Logger;
  try {
    app = await NestFactory.create(AppModule);
    logger = app.get<Logger>(WINSTON_MODULE_PROVIDER);
    const port = app.get(AppConfigService).getConfig().server.port;
    await app.listen(port);
    logger.info(`Application is running on: ${await app.getUrl()}`);
  } catch (error) {
    logger.error(`nest factory error ${error}`);
  }
}
bootstrap();
