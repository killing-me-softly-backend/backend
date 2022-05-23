export class CreateDiaryDto {
  readonly display_name: string;
  readonly events: string[];
  readonly user: string; // holds the userId of the diary
}
