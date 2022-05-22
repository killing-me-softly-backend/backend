import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongooseToJsonBasic } from '../../utils';

export type CatDocument = Cat & Document;

@Schema({
  ...mongooseToJsonBasic,
})
export class Cat {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
