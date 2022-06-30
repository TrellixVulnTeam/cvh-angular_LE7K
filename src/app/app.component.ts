import { Component, OnInit } from '@angular/core';
import users from '../assets/users.json';
import studyData from '../assets/study-content.json';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vokabello-app';
  users: User[];
  //currentUser: User;
  //studyContent;

  ngOnInit(): void {
    if (!window.sessionStorage.getItem('users')) {
      window.sessionStorage.setItem('users', JSON.stringify(users));
      window.sessionStorage.setItem('studyContent', JSON.stringify(studyData));
    }
    this.users = JSON.parse(window.sessionStorage.getItem('users'));
    //this.currentUser = this.users[0];
    //window.sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }
}
