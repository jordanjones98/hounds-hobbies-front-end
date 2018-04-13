import { Component, OnInit } from '@angular/core';

import { EventService } from '../../services/event.service';
import { Event } from '../../entity/Event';

@Component({
  selector: 'app-event-index',
  templateUrl: './event-index.component.html',
  styleUrls: ['./event-index.component.css'],
  providers: [EventService]
})
export class EventIndexComponent implements OnInit {
  events: Event;

  constructor(
    private eventService : EventService
  ) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getAllEvents()
      .subscribe(
        data => { this.events = this.eventService.createObject(data) },
        error => console.log("HTTP ERROR: " + error)
      );
  }
}
