import { MiddlewareConsumer, Module } from '@nestjs/common';
import { json } from 'express';
import { WinstonModule } from 'nest-winston';
import { AppConfigModule, AppConfigService } from './config';
import { DalModule } from './dal/dal.module';
import { CatsModule } from './entities/cats/cats.module';
import { loggerOptionsFactory } from './logger';

@Module({
  imports: [
    AppConfigModule,
    WinstonModule.forRootAsync({
      useFactory: (configService: AppConfigService) => {
        return loggerOptionsFactory(configService.getConfig().logger.level);
      },
      inject: [AppConfigService],
    }),
    DalModule,
    CatsModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(json()).forRoutes('*');
  }
}
