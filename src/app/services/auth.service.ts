import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { UserProvider } from '../providers/User';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  public userDetails;

  constructor(
    public af: AngularFireAuth,
    private userProvider: UserProvider,
    private userService: UserService
  ) {

    this.user = af.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          this.userService.getUser(this.userDetails.email, this.userDetails.displayName).subscribe(
            data => {
              this.userProvider.user = this.userService.createObject(data);
            }
          );
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  signInWithGoogle() {
    return this.af.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  isLoggedIn() {
    if (this.userProvider.user == null ) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this.userDetails = null
    return this.af.auth.signOut();
  }

  getUser() {
    console.log(JSON.stringify(this.user));
  }
}
