import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input() generateSessionId: () => String;
  users: User[];

  constructor(private router: Router) { }

  submitLogin(loginData) {
    this.users = JSON.parse(window.sessionStorage.getItem("users"));
    const user = this.users.find((user) => user.email == loginData.email);
    if (user) {
      const decryptedPassword = CryptoJS.AES.decrypt(user.password, "secretkey").toString(CryptoJS.enc.Utf8);
      console.log(decryptedPassword);
      if (loginData.password == decryptedPassword) {
        window.sessionStorage.setItem("currentUser", JSON.stringify(user));
        console.log("login successful");
        const sessionId = this.generateSessionId();
        window.sessionStorage.setItem('SESSIONID', sessionId.toString());
        this.router.navigate(['/dashboard']);
      }
    }
  }

  /* generateSessionId(): String {
    let sessionId = "";
    const charBank = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 15; i++)
      sessionId += charBank.charAt(Math.floor(Math.random() * charBank.length));

    return sessionId;
  } */

  ngOnInit(): void {
  }

}
