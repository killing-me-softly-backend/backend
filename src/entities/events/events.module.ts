import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiaryEventsController } from './events.controller';
import { DiaryEvent, DiaryEventSchema } from './events.schema';
import { DiaryEventsService } from './events.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DiaryEvent.name, schema: DiaryEventSchema },
    ]),
  ],
  controllers: [DiaryEventsController],
  providers: [DiaryEventsService],
  exports: [DiaryEventsService],
})
export class DiaryEventsModule {}
