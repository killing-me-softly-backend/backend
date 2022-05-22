import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongooseToJsonBasic } from '../../utils';

export type EventDocument = Event & Document;

@Schema({
  ...mongooseToJsonBasic,
})
export class Event {
  @Prop()
  id: string;

  @Prop()
  timestamp: string;

  @Prop()
  results: string[];

}

export const EventSchema = SchemaFactory.createForClass(Event);
