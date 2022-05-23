import { Controller, Get, Query } from '@nestjs/common';
import { TextAnalysisService } from './text.analysis.service';

@Controller('ta')
export class TextAnalysisController {
  constructor(private readonly taService:TextAnalysisService) {}
  @Get('byUri')
  async findOne(@Query() query: { uri: string }):  Promise<Array<[string,number]>> {
    const url = decodeURIComponent(query.uri);
    console.log(url);
    return this.taService.extarxtsentiments(["hurting", "people", "is", "bad"]);
  }
}
