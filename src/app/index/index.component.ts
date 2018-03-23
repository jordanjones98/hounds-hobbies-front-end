import { Component, OnInit } from '@angular/core';

import { EventService } from '../services/event.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [
    EventService
  ]
})
export class IndexComponent implements OnInit {
  events;

  constructor(
    private eventService: EventService,
  ) {
  }

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
