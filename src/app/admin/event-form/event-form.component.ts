import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../entity/Event';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  @Input() event: Event;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
  }

  add() {
    this.eventService.add(this.event).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  update() {

  }

}
