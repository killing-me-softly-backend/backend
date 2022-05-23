import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongooseToJsonBasic } from '../../utils';

export type DiaryDocument = Diary & Document;

@Schema({
  ...mongooseToJsonBasic,
})
export class Diary {
  @Prop()
  id: string;

  @Prop()
  display_name: string;

  @Prop()
  user: string;

  @Prop()
  events: Event[];

}

export const DiarySchema = SchemaFactory.createForClass(Diary);
