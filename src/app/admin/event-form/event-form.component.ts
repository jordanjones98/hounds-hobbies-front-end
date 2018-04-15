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
  @Input() updateForm;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
  }

  performAction() {
    if(this.updateForm) {
      this.update();
    } else {
      this.add();
    }
  }

  add() {
    this.eventService.add(this.event).subscribe(
      data => {
        this.event = this.eventService.createObject(data);
      }
    );
  }

  update() {
    this.eventService.update(this.event).subscribe(
      data => {
        this.event = this.eventService.createObject(data);
      }
    );
  }

}
