import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Answer } from './answers.schema';
import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './create.answer.dto';

@Controller('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Post()
  async create(@Body() CreateAnswerDto: CreateAnswerDto) {
    return this.answersService.create(CreateAnswerDto);
  }

  @Get()
  async findAll(): Promise<Answer[]> {
    return this.answersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Answer> {
    return this.answersService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    debugger;
    return this.answersService.delete(id);
  }
}
