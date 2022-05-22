import { Module } from '@nestjs/common';
import { SpeechToTextController } from './speech.to.text.controller';
import { SpeechToTextGcpService } from './speech.to.text.gcp.service';

@Module({
  controllers: [SpeechToTextController],
  providers: [SpeechToTextGcpService],
  exports: [SpeechToTextGcpService],
})
export class SpeechToTextModule {}
