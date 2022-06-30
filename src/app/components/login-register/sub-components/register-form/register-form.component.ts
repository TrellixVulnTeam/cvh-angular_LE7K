import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import * as CryptoJS from 'crypto-js';
import { Language } from 'src/app/model/language';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Input() generateSessionId: () => String;
  users: User[];

  constructor(private router: Router) { }

  submitRegister(registerData) {
    this.users = JSON.parse(window.sessionStorage.getItem("users"));
    let duplicateEmail = this.users.find((user) => user.email == registerData.email);
    if (!duplicateEmail) {
      const id = this.users.length + 1;
      const username = registerData.fullName + "" + id;
      const password = CryptoJS.AES.encrypt(registerData.password, "secretkey").toString();
      const allLanguages = Array<String>(JSON.parse(window.sessionStorage.getItem("studyContent")).languages);
      console.log(allLanguages);
      let languages = [];
      for (let i = 0; i < allLanguages[0].length; i++) {
        languages.push(new Language(allLanguages[0][i], 0));
      }
      //const languages = new Array<Language>((JSON.parse(window.sessionStorage.getItem("studyContent"))).languages);
      const newUser = new User(id, username, registerData.fullName, registerData.email, password, languages, [""], 0);
      this.users.push(newUser);
      window.sessionStorage.setItem("users", JSON.stringify(this.users));
      window.sessionStorage.setItem("currentUser", JSON.stringify(newUser));
      console.log("register successful");
      const sessionId = this.generateSessionId();
      window.sessionStorage.setItem('SESSIONID', sessionId.toString());
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {
  }

}
