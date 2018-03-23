import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  public userDetails;

  constructor(
    public af: AngularFireAuth
  ) {

    this.user = af.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
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
    if (this.userDetails == null ) {
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
