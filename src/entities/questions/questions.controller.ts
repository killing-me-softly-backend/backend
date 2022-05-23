import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateQuestionDto } from './create.question.dto';
import { Question } from './questions.schema';
import { QuestionsService } from './questions.service';


@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  async create(@Body() CreateQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(CreateQuestionDto);
  }

  @Get()
  async findAll(): Promise<Question[]> {
    return this.questionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Question> {
    return this.questionsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    debugger;
    return this.questionsService.delete(id);
  }
}
