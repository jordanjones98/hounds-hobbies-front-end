import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private userProvider: UserProvider,
    private router: Router
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

  updateAdmin(user: User) {
    this.userService.updateAdmin(user).subscribe();
    this.getUsers();
  }

  delete(user: User) {
    this.userService.delete(user).subscribe(
      data => {},
      error => { alert("User can not be deleted beause they are in an event") }
    );
    this.router.navigate(['/admin/users/view']);
  }

}
