import { Prop } from "@nestjs/mongoose";

export class Contact {
    @Prop()
    name: string;

    @Prop()
    number: string;
 
}