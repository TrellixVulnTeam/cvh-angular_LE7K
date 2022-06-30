import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SortableModule } from 'ngx-bootstrap/sortable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterModule } from './components/login-register/login-register.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LessonsComponent } from './components/lessons/lessons.component';
import { LessonComponent } from './components/lessons/lesson/lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginRegisterModule,
    BrowserAnimationsModule,
    FormsModule,
    SortableModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
