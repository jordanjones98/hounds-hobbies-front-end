import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { UserProvider } from '../providers/User';

@Injectable()
export class AdminAuthGuardService {

  constructor(
    private router: Router,
    private userProvider: UserProvider
  ) { }

  canActivate() {
    if(this.userProvider.user !== null && this.userProvider.user.admin) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

}
