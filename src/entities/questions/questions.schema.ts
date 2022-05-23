import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongooseToJsonBasic } from '../../utils';
import { Answer } from '../answers/answers.schema';

export type QuestionDocument = Question & Document;

@Schema({
  ...mongooseToJsonBasic,
})
export class Question {
  @Prop()
  id: string;

  @Prop()
  question: string;

  @Prop([Answer])
  answers: Answer[];

}

export const QuestionSchema = SchemaFactory.createForClass(Question);
