import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Data } from '../../providers/Data';
import { Event } from '../../entity/Event';

@Component({
  selector: 'app-index',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [EventService]
})
export class ViewComponent implements OnInit {

  event: Event;

  constructor(
    private eventService: EventService,
    private data: Data
  ) {
    /**
     * Make sure not only that it exists, but it has a name
     * (So we can be sure it is an event)
     */
    if (this.data.storage.name !== null ) {
      this.event = this.data.storage;
    } else {

    }
  }

  ngOnInit() {
  }

}
