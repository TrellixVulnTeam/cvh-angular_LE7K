import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Language } from 'src/app/model/language';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  currentUser: User;
  selectedLanguage: string = "spanish";
  perc: number;
  lessons: number;

  constructor(private router: Router) { }

  continue() {
    this.router.navigate(['/lessons']);
    window.sessionStorage.setItem("tempLanguage", this.selectedLanguage)
    console.log("going to lessons...")
  }

  getLangProgress() {
    const langLevel = <Language>(this.currentUser.languages.find((lang: Language) => lang.language == this.selectedLanguage));
    this.lessons = <number>langLevel.level;
    this.perc = ((100 * <number>langLevel.level) / 5);
  }

  languageChange(event) {
    this.selectedLanguage = event;
    this.getLangProgress();
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(window.sessionStorage.getItem("currentUser"));
    this.getLangProgress();
  }

}
