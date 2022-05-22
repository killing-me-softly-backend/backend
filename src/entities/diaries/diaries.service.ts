import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDiaryDto } from './create.diary.dto';
import { Diary, DiaryDocument } from './diaries.schema';


@Injectable()
export class DiariesService {
  constructor(
    @InjectModel(Diary.name) private readonly diaryModel: Model<DiaryDocument>
  ) {}

  async create(createSupporterDto: CreateDiaryDto): Promise<Diary> {
    return this.diaryModel.create(createSupporterDto);
  }

  async findAll(): Promise<Diary[]> {
    return this.diaryModel.find().exec();
  }

  async findOne(id: string): Promise<Diary> {
    return this.diaryModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedDiary = await this.diaryModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedDiary;
  }
}
