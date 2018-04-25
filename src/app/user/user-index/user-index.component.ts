import { Component, OnInit } from '@angular/core';
import { UserProvider } from '../../providers/User';
import { User } from '../../entity/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  user: User;

  constructor(
    private userProvider: UserProvider,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userProvider.user;
  }

}
