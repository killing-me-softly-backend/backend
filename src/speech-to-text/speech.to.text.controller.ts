import { Controller, Get, Query } from '@nestjs/common';
import { SpeechToTextGcpService } from './speech.to.text.gcp.service';

@Controller('stt')
export class SpeechToTextController {
  constructor(private readonly sttService: SpeechToTextGcpService) {}

  @Get('byUri')
  async findOne(@Query() query: { uri: string }): Promise<string[]> {
    const url = decodeURIComponent(query.uri);
    console.log(url);
    return this.sttService.transcribe(url);
  }
}
