import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { UserProvider } from '../providers/User';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  links;
  userLinks;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userProvider: UserProvider
  ) { }

  ngOnInit() {
    this.links = [
      {
        "routerLink": "events",
        "linkName": "Events"
      },
      {
        "routerLink": "admin",
        "linkName": "Admin",
        "adminOnly": true
      }
    ];
  }

  loginUser() {
    this.authService.signInWithGoogle();
  }

  logout() {
    this.authService.logout();

    this.router.navigate(['/']);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
