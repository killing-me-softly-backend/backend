import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongooseToJsonBasic } from '../../utils';

export type FeelingDocument = Feeling & Document;

@Schema({
  ...mongooseToJsonBasic,
})
export class Feeling {
  @Prop()
  id: string;

  @Prop()
  category: string;

  @Prop([String])
  sub_category: string[];

  @Prop()
  value: string;

  @Prop()
  hebrew_name: string;
}

export const FeelingSchema = SchemaFactory.createForClass(Feeling);
