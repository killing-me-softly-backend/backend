import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Answer, AnswerDocument } from './answers.schema';
import { CreateAnswerDto } from './create.answer.dto';


@Injectable()
export class AnswersService {
  constructor(
    @InjectModel(Answer.name) private readonly answerModel: Model<AnswerDocument>
  ) {}

  async create(createAnswerDto: CreateAnswerDto): Promise<Answer> {
    return this.answerModel.create(createAnswerDto);
  }

  async findAll(): Promise<Answer[]> {
    return this.answerModel.find().exec();
  }

  async findOne(id: string): Promise<Answer> {
    return this.answerModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedCat = await this.answerModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
