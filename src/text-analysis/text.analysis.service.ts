import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { json } from 'stream/consumers';

@Injectable()
export class TextAnalysisService {

  constructor() {
  //get whitelist files
  }
  
  private getwhitelist() : string[]{
    return [
      "הרג",
      "התאבד",
      "עזב",
      "מות",
      "מכה",
      "שתק",
      "קבר",
      "פחד"]
  }


  async extarxtsentiments(text: string[]): Promise<string> {
    const dict = {}, filterd_dict ={}
    const uri = "https://hebrew-nlp.co.il/service/Morphology/Normalize"
    const personal_token = "JhZHmfdMYgtOaR5";
    const response = await fetch(uri, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "text": text.join(' '),
        "token": personal_token,
        "type": "SEARCH"
    })});

    let data = await response.json()[0];
    // Remove nikud
    data = data.join(' ').replace(/[\u0591-\u05C7]/g, '')
    //Change to words
    data.split(' ').forEach((word) => {
      const numberOfOccurrences = data.join(' ').match(new RegExp(word, "g")).length
      dict[word] = numberOfOccurrences 
    })
    for (let key in dict) {
      if (this.getwhitelist().indexOf(key) > -1)
        filterd_dict[key] = dict[key]
    }
    return JSON.stringify(filterd_dict)
  }
}
