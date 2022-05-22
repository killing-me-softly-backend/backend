import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateEventDto } from './create.event.dto';
import { EventsService } from './events.service';
import { Event } from './events.schema';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async create(@Body() CreateEventDto: CreateEventDto) {
    return this.eventsService.create(CreateEventDto);
  }

  @Get()
  async findAll(): Promise<Event[]> {
    return this.eventsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Event> {
    return this.eventsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    debugger;
    return this.eventsService.delete(id);
  }
}
