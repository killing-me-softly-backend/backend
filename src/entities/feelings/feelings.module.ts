import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FeelingsController } from './feelings.controller';
import { Feeling, FeelingSchema } from './feelings.schema';
import { FeelingsService } from './feelings.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Feeling.name, schema: FeelingSchema }]),
  ],
  controllers: [FeelingsController],
  providers: [FeelingsService],
})
export class FeelingsModule {}
