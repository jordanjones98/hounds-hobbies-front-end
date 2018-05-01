import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { JsonConvert, OperationMode, ValueCheckingMode }  from 'json2typescript';
import { Event } from '../entity/Event';
import { environment } from '../../environments/environment';

@Injectable()
export class EventService {

  constructor(
    private apiService : ApiService
  ) {}

  getAllEvents() {
    return this.apiService.getRequest(environment.apiEndpoint + "/events");
  }

  getEventBySlug(slug) {
    return this.apiService.getRequest(environment.apiEndpoint + "/events/" + slug);
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
      environment.apiEndpoint + "/events/insert",
      jsonEvent
    );
  }

  update(event: Event) {
    let jsonEvent = JSON.stringify(event);
    return this.apiService.postRequest(
      environment.apiEndpoint + "/events/update",
      jsonEvent
    );
  }

  delete(event: Event) {
    return this.apiService.deleteRequest(
      environment.apiEndpoint + "/events/delete",
      event
    );
  }
}
