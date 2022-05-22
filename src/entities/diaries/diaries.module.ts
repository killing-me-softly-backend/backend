import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiariesController } from './diaries.controller';
import { Diary, DiarySchema } from './diaries.schema';
import { DiariesService } from './diaries.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Diary.name, schema: DiarySchema }]),
  ],
  controllers: [DiariesController],
  providers: [DiariesService],
})
export class DiariesModule {}
