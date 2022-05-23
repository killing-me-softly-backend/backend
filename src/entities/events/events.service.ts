import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDiaryEventDto } from './create.event.dto';
import { DiaryEventDocument,DiaryEvent } from './events.schema';

@Injectable()
export class DiaryEventsService {
  constructor(
    @InjectModel(DiaryEvent.name) private readonly diaryEventModel: Model<DiaryEventDocument>
  ) {}

  async create(createDiaryEventDto: CreateDiaryEventDto): Promise<DiaryEvent> {
    return this.diaryEventModel.create(createDiaryEventDto);
  }

  async findAll(): Promise<DiaryEvent[]> {
    return this.diaryEventModel.find().exec();
  }

  async findOne(id: string): Promise<DiaryEvent> {
    return this.diaryEventModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedDiary = await this.diaryEventModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedDiary;
  }
}
