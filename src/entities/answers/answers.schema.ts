import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongooseToJsonBasic } from '../../utils';

export type AnswerDocument = Answer & Document;

@Schema({
  ...mongooseToJsonBasic,
})
export class Answer {
  @Prop()
  id: string;

  @Prop()
  answer: string;

  @Prop()
  icon: string;

}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
