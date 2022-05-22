import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Diary } from './diaries.schema';
import { DiariesService } from './diaries.service';
import { CreateDiaryDto } from './create.diary.dto';

@Controller('diaries')
export class DiariesController {
  constructor(private readonly diariesService: DiariesService) {}

  @Post()
  async create(@Body() CreateDiaryDto: CreateDiaryDto) {
    return this.diariesService.create(CreateDiaryDto);
  }

  @Get()
  async findAll(): Promise<Diary[]> {
    return this.diariesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Diary> {
    return this.diariesService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    debugger;
    return this.diariesService.delete(id);
  }
}
