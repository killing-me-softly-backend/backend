import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { json } from 'express';
import { WinstonModule } from 'nest-winston';
import { AppConfigModule, AppConfigService } from './config';
import { CatsModule } from './entities/cats/cats.module';
import { DiariesModule } from './entities/diaries/diaries.module';
import { EventsModule } from './entities/events/events.module';
import { FeelingsModule } from './entities/feelings/feelings.module';
import { SupportersModule } from './entities/supporters/supporters.module';
import { loggerOptionsFactory } from './logger';
import { SpeechToTextModule } from './speech-to-text/speech.to.text.module';

@Module({
  imports: [
    AppConfigModule,
    WinstonModule.forRootAsync({
      useFactory: (configService: AppConfigService) => {
        return loggerOptionsFactory(configService.getConfig().logger.level);
      },
      inject: [AppConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: async (configService: AppConfigService) => {
        const config = configService.getConfig();
        return {
          uri: config.mongo.uri,
        };
      },
      inject: [AppConfigService],
    }),
    CatsModule,
    FeelingsModule,
    SpeechToTextModule,
    SupportersModule,
    DiariesModule,
    EventsModule
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(json()).forRoutes('*');
  }
}
