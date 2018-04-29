import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { JsonConvert, OperationMode, ValueCheckingMode }  from 'json2typescript';
import { User } from '../entity/User';


@Injectable()
export class UserService {

  constructor(
    private apiService: ApiService
  ) { }

  getAllUsers() {
    return this.apiService.getRequest("http://192.168.1.34:8888/users");
  }

  getUserBySlug(slug) {
    return this.apiService.getRequest("http://192.168.1.34:8888/users/" + slug);
  }

  add(user: User) {
    let jsonUser = JSON.stringify(user);
    return this.apiService.postRequest(
      "http://192.168.1.34:8888/users/insert",
      jsonUser
    );
  }

  update(user: User) {
    let jsonUser = JSON.stringify(user);
    return this.apiService.postRequest(
      "http://192.168.1.34:8888/users/update",
      jsonUser
    );
  }

  delete(user: User) {
    let jsonUser = JSON.stringify(user);
    return this.apiService.deleteRequest(
      "http://192.168.1.34:8888/users/delete",
      jsonUser
    );
  }

  getUser(email, fullName) {
    return this.apiService.postRequest(
      "http://192.168.1.34:8888/users/create-or-return",
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
      "http://192.168.1.34:8888/users/" + user.slug + "/add-or-remove-event",
      JSON.stringify(user)
    );
  }

  updateAdmin(user: User) {
    return this.apiService.postRequest(
      "http://192.168.1.34:8888/users/" + user.slug + "/admin",
      JSON.stringify(user)
    );
  }

}
