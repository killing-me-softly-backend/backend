import { Answer } from "../answers/answers.schema";

export class CreateQuestionDto {
  readonly question: string;
  readonly answers: Answer[];
}
