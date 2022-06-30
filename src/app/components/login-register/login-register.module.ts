import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { LoginFormComponent } from './sub-components/login-form/login-form.component';
import { RegisterFormComponent } from './sub-components/register-form/register-form.component';
import { LoginRegisterComponent } from './login-register.component';


@NgModule({
  declarations: [
    LoginRegisterComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    LoginRegisterRoutingModule,
    FormsModule
  ]
})
export class LoginRegisterModule { }
