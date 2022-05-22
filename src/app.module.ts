import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { json } from 'express';
import { WinstonModule } from 'nest-winston';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule, AppConfigService } from './config';
import { CatsModule } from './entities/cats/cats.module';
import { FeelingsModule } from './entities/feelings/feelings.module';
import { loggerOptionsFactory } from './logger';
import { SpeechToTextModule } from './speech-to-text/speech.to.text.module';
import { UsersModule } from './users/users.module';

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
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(json()).forRoutes('*');
  }
}
