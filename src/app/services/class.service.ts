import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { JsonConvert, OperationMode, ValueCheckingMode }  from 'json2typescript';
import { Class } from '../entity/Class';
import { environment } from '../../environments/environment';

@Injectable()
export class ClassService {

  constructor(
    private apiService: ApiService
  ) {}

  getAllClasses() {
    return this.apiService.getRequest(environment.apiEndpoint + "/classes");
  }

  update(_class: Class) {
    return this.apiService.postRequest(environment.apiEndpoint + "/classes/update", JSON.stringify(_class));
  }

  add(_class: Class) {
    return this.apiService.postRequest(environment.apiEndpoint + "/classes/insert", JSON.stringify(_class));
  }

  createObject(response) {
    let jsonConvert : JsonConvert = new JsonConvert();
    jsonConvert.ignorePrimitiveChecks = false;
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;

    try {
      return jsonConvert.deserialize(response, Class);
    } catch (e) {
      console.log(e);
    }
  }

}
