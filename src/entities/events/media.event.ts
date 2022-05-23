import { Prop } from "@nestjs/mongoose";

export class MediaEvent {

    @Prop()
    name: string;

    @Prop()
    uri: string;
    
}