import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { JsonConvert, OperationMode, ValueCheckingMode }  from 'json2typescript';
import { User } from '../entity/User';
import { environment } from '../../environments/environment'


@Injectable()
export class UserService {

  constructor(
    private apiService: ApiService
  ) { }

  getAllUsers() {
    return this.apiService.getRequest(environment.apiEndpoint + "/users");
  }

  getUserBySlug(slug) {
    return this.apiService.getRequest(environment.apiEndpoint + "/users/" + slug);
  }

  add(user: User) {
    let jsonUser = JSON.stringify(user);
    return this.apiService.postRequest(
      environment.apiEndpoint + "/users/insert",
      jsonUser
    );
  }

  update(user: User) {
    let jsonUser = JSON.stringify(user);
    return this.apiService.postRequest(
      environment.apiEndpoint + "/users/update",
      jsonUser
    );
  }

  delete(user: User) {
    let jsonUser = JSON.stringify(user);
    return this.apiService.deleteRequest(
      environment.apiEndpoint + "/users/delete",
      jsonUser
    );
  }

  getUser(email, fullName) {
    return this.apiService.postRequest(
      environment.apiEndpoint + "/users/create-or-return",
      {
        "email": email,
        "fullName": fullName
      }
    );
  }

  createObject(response) {
    let jsonConvert : JsonConvert = new JsonConvert();
    jsonConvert.ignorePrimitiveChecks = false;
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;

    try {
      return jsonConvert.deserialize(response, User);
    } catch (e) {
      console.log(e);
    }
  }

  addOrRemoveEvent(user: User) {
    return this.apiService.postRequest(
      environment.apiEndpoint + "/users/" + user.slug + "/add-or-remove-event",
      JSON.stringify(user)
    );
  }

  updateAdmin(user: User) {
    return this.apiService.postRequest(
      environment.apiEndpoint + "/users/" + user.slug + "/admin",
      JSON.stringify(user)
    );
  }

}
