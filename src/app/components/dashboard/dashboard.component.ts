import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProfileComponent } from './sub-components/profile/profile.component';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(ProfileComponent, {
      class: 'test-modal',
    });
  }
  currentUser: User = JSON.parse(window.sessionStorage.getItem("currentUser"));


  ngOnInit(): void {
  }

}
