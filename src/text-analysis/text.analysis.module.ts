import { Module } from '@nestjs/common';
import { TextAnalysisController } from './text.analysis.controller';
import { TextAnalysisService } from './text.analysis.service';

@Module({
  controllers: [TextAnalysisController],
  providers: [TextAnalysisService],
  exports: [TextAnalysisService],
})
export class TextAnalysisModule {}
