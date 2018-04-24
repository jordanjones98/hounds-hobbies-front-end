import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { User } from '../../../entity/User';
import { UserProvider } from '../../../providers/User';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users: User;

  constructor(
    private userService: UserService,
    private userProvider: UserProvider
  ) { }

  ngOnInit() {
    this.getUsers();
    console.log("Show User");
    console.log(this.userProvider.user);
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = this.userService.createObject(data);
      }
    );
  }

}
