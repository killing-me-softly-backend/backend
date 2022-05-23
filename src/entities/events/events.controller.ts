import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateDiaryEventDto } from './create.event.dto';
import { DiaryEventsService } from './events.service';
import { DiaryEvent } from './events.schema';

@Controller('diaryEvents')
export class DiaryEventsController {
  constructor(private readonly diaryEventsService: DiaryEventsService) {}

  @Post()
  async create(@Body() CreateDiaryEventDto: CreateDiaryEventDto) {
    return this.diaryEventsService.create(CreateDiaryEventDto);
  }

  @Get()
  async findAll(): Promise<DiaryEvent[]> {
    return this.diaryEventsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DiaryEvent> {
    return this.diaryEventsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    debugger;
    return this.diaryEventsService.delete(id);
  }
}
