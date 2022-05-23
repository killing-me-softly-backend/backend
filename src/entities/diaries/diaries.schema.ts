import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongooseToJsonBasic } from '../../utils';
import { DiaryEvent } from '../events/events.schema';

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

  @Prop([DiaryEvent])
  events: DiaryEvent[];

}

export const DiarySchema = SchemaFactory.createForClass(Diary);
