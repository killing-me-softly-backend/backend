import { Controller, Get, Query } from '@nestjs/common';
import { DiaryEventsService } from '../entities/events/events.service';
import { SpeechToTextGcpService } from './speech.to.text.gcp.service';

@Controller('stt')
export class SpeechToTextController {
  constructor(
    private readonly sttService: SpeechToTextGcpService,
    private readonly diaryEventService: DiaryEventsService
  ) {}

  @Get('')
  async findOne(
    @Query() query: { uri: string; event_id: string }
  ): Promise<{ status: boolean }> {
    const url = decodeURIComponent(query.uri);
    const event_id = query.event_id;
    // const audio_trancsribe = await this.sttService.transcribe(url);
    const audio_trancsribe = ['abc', 'def'];
    await this.diaryEventService.update(event_id, { audio_trancsribe });
    return { status: true };
  }
}
