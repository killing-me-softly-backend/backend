import { Controller, Get, Query } from '@nestjs/common';
import { TextAnalysisService } from './text.analysis.service';
import { DiaryEventsService } from 'src/entities/events/events.service';
@Controller('ta')
export class TextAnalysisController {
  constructor(
    private readonly taService: TextAnalysisService,
    private readonly diaryEventService: DiaryEventsService
  ) {}

  @Get('anal')
  async findOne(
    @Query() query: { uri: string; event_id: string }
  ): Promise<{ status: boolean }> {
    const text = decodeURIComponent(query.uri);
    const event_id = query.event_id;
    //const offensive_words = this.taService.extarxtsentiments(text.split(" "));
    const offensive_words = this.taService.extarxtsentiments(["אני","אאהרוג","אותך"]);
    await this.diaryEventService.update(event_id, { offensive_words });
    return { status: true };
  }
}
