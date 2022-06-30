import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslatedText } from '../model/translatedText';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  //translatedWord: String

  constructor(private http: HttpClient) { }

  translate(word: string, lang: string) {
    //let translatedWord;

    return this.http.post<TranslatedText>('https://libretranslate.pussthecat.org/translate', {
      "q": word,
      "source": "en",
      "target": lang,
      "format": "text"
    });
  }


}
