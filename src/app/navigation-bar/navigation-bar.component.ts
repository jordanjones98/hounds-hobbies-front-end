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

  constructor(
    private authService: AuthService,
    private router: Router,
    private userProvider: UserProvider
  ) { }

  ngOnInit() {
    this.links = [
      {
        "routerLink": "Events",
        "linkName": "events"
      },
      {
        "routerLink": "User",
        "linkName": "user"
      },
      {
        "routerLink": "Admin",
        "linkName": "admin",
        "adminOnly": true
      }
    ];

  }

  login() {
    this.authService.signInWithGoogle();
  }

}
