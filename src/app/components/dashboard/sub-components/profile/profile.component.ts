import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUser: User;

  constructor(public bsModalRef: BsModalRef, private readonly router: Router) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'));
  }

  logout() {
    this.bsModalRef.hide();
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('SESSIONID');
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['welcome']);
  }
}
