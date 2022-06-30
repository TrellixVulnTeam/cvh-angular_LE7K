import { Component, Input, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Language } from 'src/app/model/language';
import { Lesson } from 'src/app/model/lesson';
import { User } from 'src/app/model/user';
import { TranslateService } from 'src/app/service/translate.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit, OnChanges {

  @Input() selectedTopic: String
  @Input() allLessons: Lesson[];

  user: User;

  wordsEnglish: string[];
  wordsTranslated: string[] = [];
  wordsTranslatedShuffled: string[] = [];

  isLoading = true;

  isConfirmed = false;
  isCorrect = false;

  failedAttempts = 0;
  newPoints = 0;

  tempLang: string;

  timeStart: number;

  constructor(private translator: TranslateService, private _ngZone: NgZone) { }

  ngOnInit(): void {
    this.user = JSON.parse(window.sessionStorage.getItem("currentUser"));
    this.tempLang = window.sessionStorage.getItem("tempLanguage");
    this.timeStart = Math.floor(Date.now() / 1000);
  }

  ngOnChanges(): void {
    this.user = JSON.parse(window.sessionStorage.getItem("currentUser"));
    this.transWords();
  }


  translateAndWait(word: string, lang: string) {
    return this.translator.translate(word, lang).toPromise();
  }

  async transWords() {
    this.tempLang = window.sessionStorage.getItem("tempLanguage");
    console.log(this.tempLang);
    if (this.wordsTranslated.length > 0) {
      this.wordsTranslated = [];
      this.failedAttempts = 0;
      this.newPoints = 0;
    }
    this.wordsEnglish = this.allLessons.find((item) => item.topic == this.selectedTopic).words;
    for (let i = 0; i < this.wordsEnglish.length; i++) {
      //console.log(this.wordsEnglish);
      const word = <string>this.wordsEnglish[i];
      let shortLang = "";
      if (this.tempLang == "spanish") {
        shortLang = "es";
      } else {
        shortLang = "it"
      }
      let translatedWord = await this.translateAndWait(word, shortLang);
      //translatedWord.then((data) => trans = data.translatedText);
      console.log(translatedWord.translatedText);
      //translated.then((data) => translatedWord = data.translatedText);
      this.wordsTranslated.push(translatedWord.translatedText);
    }
    this.wordsTranslatedShuffled = this.shuffle(this.wordsTranslated);
    this.isLoading = false;
    console.log(this.wordsEnglish);
    console.log(this.wordsTranslated);

  }

  shuffle(array: string[]) {
    let normalArray = [...array];
    let currentIndex = normalArray.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [normalArray[currentIndex], normalArray[randomIndex]] = [
        normalArray[randomIndex], normalArray[currentIndex]];
    }

    return normalArray;
  }



  confirm() {
    console.log(this.wordsTranslated);
    console.log(this.wordsTranslatedShuffled);
    this.isConfirmed = true;
    if (this.wordsTranslated.length === this.wordsTranslatedShuffled.length &&
      this.wordsTranslated.every((value, index) => value === this.wordsTranslatedShuffled[index])) {
      this.isCorrect = true;
      if (this.failedAttempts > 4) {
        this.newPoints = 5;
      } else {
        this.newPoints = 30 - (this.failedAttempts * 5);
      }
      (<Language>(<Language[]>this.user.languages).find((lang) => lang.language == window.sessionStorage.getItem("tempLanguage"))).level++;
      this.user.points += this.newPoints;
      if (Math.floor(Date.now() / 1000) - this.timeStart < 60000 && this.user.achievements.length == 0) {
        this.user.achievements.push("fastest whale in the sea");
      }

      window.sessionStorage.setItem("currentUser", JSON.stringify(this.user));
      let users = <User[]>JSON.parse(window.sessionStorage.getItem("users"));
      users[users.length - 1] = this.user;
      window.sessionStorage.setItem("users", JSON.stringify(users));

    } else {
      this.isCorrect = false;
      this.failedAttempts++;
    }
  }

}
