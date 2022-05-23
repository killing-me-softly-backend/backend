import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { json } from 'express';
import { WinstonModule } from 'nest-winston';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule, AppConfigService } from './config';
import { CatsModule } from './entities/cats/cats.module';
import { DiariesModule } from './entities/diaries/diaries.module';
import { DiaryEventsModule } from './entities/events/events.module';
import { FeelingsModule } from './entities/feelings/feelings.module';
import { SupportersModule } from './entities/supporters/supporters.module';
import { loggerOptionsFactory } from './logger';
import { SpeechToTextModule } from './speech-to-text/speech.to.text.module';
import cors from 'cors'; 
import { TextAnalysisModule } from './text-analysis/text.analysis.module';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './entities/questions/questions.module';
import { AnswersModule } from './entities/answers/answers.module';

@Module({
  controllers: [AppController],
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
    TextAnalysisModule,
    AuthModule,
    UsersModule,
    SupportersModule,
    DiariesModule,
    DiaryEventsModule,
    QuestionsModule,
    AnswersModule
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(json()).forRoutes('*');
  }
}
