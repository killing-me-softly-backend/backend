import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestionDto } from './create.question.dto';
import { Question, QuestionDocument } from './questions.schema';


@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private readonly questionModel: Model<QuestionDocument>
  ) {}

  async create(createFeelingDto: CreateQuestionDto): Promise<Question> {
    return this.questionModel.create(createFeelingDto);
  }

  async findAll(): Promise<Question[]> {
    return this.questionModel.find().exec();
  }

  async findOne(id: string): Promise<Question> {
    return this.questionModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedCat = await this.questionModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
