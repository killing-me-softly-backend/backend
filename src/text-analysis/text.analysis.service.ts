import { Injectable } from '@nestjs/common';

@Injectable()
export class TextAnalysisService {

  constructor() {
  //get whitelist files
  }

  async extarxtsentiments(text: string[]): Promise<Array<[string,number]>> {
    //what do i returm
    return [["killing",2,],["me",1]]
  }
}
