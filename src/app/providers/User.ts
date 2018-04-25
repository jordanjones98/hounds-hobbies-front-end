import { Injectable } from '@angular/core';
import { User } from '../entity/User';

@Injectable()
export class UserProvider {
  public user: User = null;

  public constructor() {}
}
