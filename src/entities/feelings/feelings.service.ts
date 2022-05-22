import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFeelingDto } from './create.feeling.dto';
import { Feeling, FeelingDocument } from './feelings.schema';

@Injectable()
export class FeelingsService {
  constructor(
    @InjectModel(Feeling.name) private readonly catModel: Model<FeelingDocument>
  ) {}

  async create(createFeelingDto: CreateFeelingDto): Promise<Feeling> {
    return this.catModel.create(createFeelingDto);
  }

  async findAll(): Promise<Feeling[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Feeling> {
    return this.catModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedCat = await this.catModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
