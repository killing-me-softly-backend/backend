import { Module } from '@nestjs/common';
import { TextAnalysisController } from './text.analysis.controller';
import { TextAnalysisService } from './text.analysis.service';
import { DiaryEventsModule } from '../entities/events/events.module';

@Module({
  imports: [DiaryEventsModule],
  controllers: [TextAnalysisController],
  providers: [TextAnalysisService],
  exports: [TextAnalysisService],
})
export class TextAnalysisModule {}
