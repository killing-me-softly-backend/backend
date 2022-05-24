import { MediaEvent } from './media.event';

export interface CreateDiaryEventDto {
  readonly diary_id: string;
  readonly display_name?: string;
  readonly results?: string[];
  readonly image?: MediaEvent;
  readonly video?: MediaEvent;
  readonly audio?: MediaEvent;
  readonly audio_trancsribe?: string[];
  readonly offensive_words?: string[];
  readonly free_text?: string;
}

export interface UpdateDiaryEventDto
  extends Omit<CreateDiaryEventDto, 'diary_id'> {}
