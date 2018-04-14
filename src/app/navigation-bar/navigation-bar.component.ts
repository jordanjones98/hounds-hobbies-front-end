import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  links;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.links = [
      {
        "routerLink": "Events",
        "linkName": "events"
      },
      {
        "routerLink": "Admin",
        "linkName": "admin"
      }
    ];

  }

  login() {
    this.authService.signInWithGoogle();
  }

}
