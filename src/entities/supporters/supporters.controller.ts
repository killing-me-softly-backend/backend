import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateSupporterDto } from './create.supporter.dto';
import { Supporter } from './supporters.schema';
import { SupportersService } from './supporters.service';

@Controller('supporters')
export class SupportersController {
  constructor(private readonly supportersService: SupportersService) {}

  @Post()
  async create(@Body() CreateSupporterDto: CreateSupporterDto) {
    return this.supportersService.create(CreateSupporterDto);
  }

  @Get()
  async findAll(): Promise<Supporter[]> {
    return this.supportersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Supporter> {
    return this.supportersService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    debugger;
    return this.supportersService.delete(id);
  }
}
