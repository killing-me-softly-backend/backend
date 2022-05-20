import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule, AppConfigService } from '../config';
import { DalService } from './dal.service';

@Module({
  imports: [
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
  ],
  providers: [DalService],
  exports: [DalService],
})
export class DalModule {}
