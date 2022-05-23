import { Injectable } from '@nestjs/common';
const speech = require('@google-cloud/speech');

@Injectable()
export class SpeechToTextGcpService {
  private client;

  constructor() {
    this.client = new speech.SpeechClient();
  }

  async transcribe(urlToCloudStorage: string): Promise<string[]> {
    const audio = {
      uri: urlToCloudStorage,
    };
    const config = {
      languageCode: 'iw-IL',
    };
    const request = {
      audio: audio,
      config: config,
    };

    const [response] = await this.client.recognize(request);
    return response?.results?.alternatives;
  }
}
