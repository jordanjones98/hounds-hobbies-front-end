import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from '../../../services/event.service';
import { Event } from '../../../entity/Event';
import { Data } from '../../../providers/Data';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {
  events: Event;

  constructor(
    private eventService: EventService,
    private router: Router,
    private data: Data
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

  viewEvent(event: Event) {
    this.data.storage = event;
    this.router.navigate(['admin/events/edit', event.slug]);
  }

}
