import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = this.userService.createObject(data);
      }
    );
  }

}
