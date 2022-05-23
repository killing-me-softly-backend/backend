import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongooseToJsonBasic } from '../../utils';
import { MediaEvent } from './media.event';
import { QuestionnaireItem } from './questionnaire.item';

export type DiaryEventDocument = DiaryEvent & Document;

@Schema({
  ...mongooseToJsonBasic,
})
export class DiaryEvent {
  @Prop()
  id: string;

  @Prop({ type: Date})
  timestamp: Date;

  @Prop([QuestionnaireItem])
  questionnaire: QuestionnaireItem[];

  @Prop()
  image: MediaEvent;

  @Prop()
  video: MediaEvent;
  
  @Prop()
  audio: MediaEvent;

  @Prop()
  audio_trancsribe: string;

  @Prop([String])
  offensive_words: string[];

  @Prop()
  free_text: string;


}

export const DiaryEventSchema = SchemaFactory.createForClass(DiaryEvent);
