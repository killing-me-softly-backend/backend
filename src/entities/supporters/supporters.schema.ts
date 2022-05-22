import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongooseToJsonBasic } from '../../utils';

export type SupporterDocument = Supporter & Document;

@Schema({
  ...mongooseToJsonBasic,
})
export class Supporter {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  phone_number: string;

  @Prop()
  contact_id: string;

}

export const SupporterSchema = SchemaFactory.createForClass(Supporter);
