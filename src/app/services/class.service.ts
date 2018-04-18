import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { JsonConvert, OperationMode, ValueCheckingMode }  from 'json2typescript';
import { Class } from '../entity/Class';

@Injectable()
export class ClassService {

  constructor(
    private apiService: ApiService
  ) {}

  getAllClasses() {
    return this.apiService.getRequest("http://192.168.1.34:8888/classes");
  }

  update(_class: Class) {
    return this.apiService.postRequest("http://192.168.1.34:8888/classes/update", JSON.stringify(_class));
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
