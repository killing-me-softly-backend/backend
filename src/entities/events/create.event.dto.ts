import { MediaEvent } from "./media.event";

export class CreateDiaryEventDto {
  readonly display_name: string;
  readonly timestamp: Date;
  readonly results: string[];
  readonly image: MediaEvent;
  readonly video: MediaEvent;
  readonly audio: MediaEvent;
  readonly audio_trancsribe: string;
  readonly offensive_words: string[];
  readonly free_text: string;

}

