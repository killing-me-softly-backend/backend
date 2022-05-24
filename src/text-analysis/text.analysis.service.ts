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


  public extarxtsentiments(text: string[]): string[] {
    const filterd=[]
    const uri = "https://hebrew-nlp.co.il/service/Morphology/Normalize"
    const personal_token = "JhZHmfdMYgtOaR5";
    const response = fetch(uri, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "text": text.join(' '),
        "token": personal_token,
        "type": "SEARCH"
    })});

    let data = response.json()[0];
    // Remove nikud
    data = data.join(' ').replace(/[\u0591-\u05C7]/g, '')
    data.split(' ').foreach(function (word){
      if (this.getwhitelist().indexOf(word) > -1)
        filterd.push(word)
    })
    return filterd
  }
}
