import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateFeelingDto } from './create.feeling.dto';
import { Feeling } from './feelings.schema';
import { FeelingsService } from './feelings.service';

@Controller('feelings')
export class FeelingsController {
  constructor(private readonly feelingsService: FeelingsService) {}

  @Post()
  async create(@Body() CreateFeelingDto: CreateFeelingDto) {
    return this.feelingsService.create(CreateFeelingDto);
  }

  @Get()
  async findAll(): Promise<Feeling[]> {
    return this.feelingsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Feeling> {
    return this.feelingsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    debugger;
    return this.feelingsService.delete(id);
  }
}
