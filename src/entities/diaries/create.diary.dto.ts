import { DiaryEvent } from "../events/events.schema";

export class CreateDiaryDto {
  readonly display_name: string;
  readonly events: DiaryEvent[];
  readonly user: string; // holds the userId of the diary
}
