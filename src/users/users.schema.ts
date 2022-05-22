import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongooseToJsonBasic } from '../utils';

export type UserDocument = User & Document;

@Schema({
  ...mongooseToJsonBasic,
})
export class User {
  @Prop()
  id: string;

  @Prop({
    unique: true,
  })
  username: string;

  @Prop()
  password: string;

  @Prop()
  isAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
