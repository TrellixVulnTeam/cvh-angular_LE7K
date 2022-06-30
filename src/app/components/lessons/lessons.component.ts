import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lesson } from 'src/app/model/lesson';
import { User } from 'src/app/model/user';

@Component({
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  allLessons: Lesson[];
  selectedTopic: string;
  isSelected = false;
  user: User;
  level: number;

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/dashboard']);
    window.sessionStorage.removeItem("tempLanguage");
  }

  selectTopic(topicIndex: number) {
    this.isSelected = false;
    this.selectedTopic = this.allLessons[topicIndex].topic;
    console.log(this.selectedTopic);
    this.isSelected = true;
  }

  ngOnInit(): void {
    this.allLessons = JSON.parse(window.sessionStorage.getItem("studyContent")).lessons;
    this.user = JSON.parse(window.sessionStorage.getItem("currentUser"));
    this.level = this.user.languages.find((lang) => lang.language == window.sessionStorage.getItem("tempLanguage")).level;
  }

}
