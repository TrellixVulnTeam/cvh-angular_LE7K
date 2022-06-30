import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  login: boolean = true;

  constructor() { }

  switchForm(): void {
    this.login = !this.login;
  }

  generateSessionId(): String {
    let sessionId = "";
    const charBank = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 15; i++)
      sessionId += charBank.charAt(Math.floor(Math.random() * charBank.length));

    return sessionId;
  }

  ngOnInit(): void {

  }

}
