import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  currentUser: User;
  rankingList: User[];

  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(window.sessionStorage.getItem("currentUser"));
    let list = <User[]>JSON.parse(window.sessionStorage.getItem("users"));
    this.rankingList = list.sort((a, b) => (a.points < b.points) ? 1 : -1);
  }

}
