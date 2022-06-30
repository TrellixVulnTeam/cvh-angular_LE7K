import { AbstractJsEmitterVisitor } from '@angular/compiler/src/output/abstract_js_emitter';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {
  achievements: String[];
  currentUser: User;
  constructor() {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'));
    this.achievements = this.currentUser.achievements;

    for (let i = this.achievements.length; i <= 14; i++) {
      this.achievements.unshift('');
    }
  }
}
