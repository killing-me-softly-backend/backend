import { Controller, Get, Query } from '@nestjs/common';
import { TextAnalysisService } from './text.analysis.service';

@Controller('ta')
export class TextAnalysisController {
  constructor(private readonly taService:TextAnalysisService) {}
  @Get('byUri')
  async findOne(@Query() query: { uri: string }):  Promise<string> {
    const url = decodeURIComponent(query.uri);
    console.log(url);
    return this.taService.extarxtsentiments(["אני","אאהרוג","אותך"]);
  }
}
