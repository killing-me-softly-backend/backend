import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSupporterDto } from './create.supporter.dto';
import { Supporter, SupporterDocument } from './supporters.schema';

@Injectable()
export class SupportersService {
  constructor(
    @InjectModel(Supporter.name) private readonly catModel: Model<SupporterDocument>
  ) {}

  async create(createSupporterDto: CreateSupporterDto): Promise<Supporter> {
    return this.catModel.create(createSupporterDto);
  }

  async findAll(): Promise<Supporter[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Supporter> {
    return this.catModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedCat = await this.catModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
