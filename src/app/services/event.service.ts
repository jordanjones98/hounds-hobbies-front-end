import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { JsonConvert, OperationMode, ValueCheckingMode }  from 'json2typescript';
import { Event } from '../entity/Event';

@Injectable()
export class EventService {

  constructor(
    private apiService : ApiService
  ) {}

  getAllEvents() {
    return this.apiService.getRequest("http://192.168.1.34:8888/events");
  }

  getEventBySlug(slug) {
    return this.apiService.getRequest("http://192.168.1.34:8888/events/" + slug);
  }

  createObject(response) {
    let jsonConvert : JsonConvert = new JsonConvert();
    jsonConvert.ignorePrimitiveChecks = false;
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;

    try {
      return jsonConvert.deserialize(response, Event);
    } catch (e) {
      console.log(e);
    }
  }

  add(event: Event) {
    let jsonEvent = JSON.stringify(event);
    return this.apiService.postRequest(
      "http://192.168.1.34:8888/events/insert",
      jsonEvent
    );
  }

  update(event: Event) {
    let jsonEvent = JSON.stringify(event);
    return this.apiService.postRequest(
      "http://192.168.1.34:8888/events/update",
      jsonEvent
    );
  }

}
