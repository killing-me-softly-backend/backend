import { Module } from '@nestjs/common';
import { DiaryEventsModule } from '../entities/events/events.module';
import { SpeechToTextController } from './speech.to.text.controller';
import { SpeechToTextGcpService } from './speech.to.text.gcp.service';

@Module({
  imports: [DiaryEventsModule],
  controllers: [SpeechToTextController],
  providers: [SpeechToTextGcpService],
  exports: [SpeechToTextGcpService],
})
export class SpeechToTextModule {}
