import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
      private router: Router,
      private authService: AuthService
    ) { }

    canActivate() {
        console.log("CAN ACTIVATE");
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;

    }

}
