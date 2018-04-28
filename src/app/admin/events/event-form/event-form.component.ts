import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../entity/Event';
import { Class } from '../../../entity/Class';
import { EventService } from '../../../services/event.service';
import { ClassService } from '../../../services/class.service';

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  @Input() event: Event;
  @Input() updateForm;

  classes;

  constructor(
    private eventService: EventService,
    private classService: ClassService
  ) { }

  ngOnInit() {
    this.getAllClasses();
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

  delete() {
    this.eventService.delete(this.event).subscribe();
  }

  getAllClasses() {
    this.classService.getAllClasses().subscribe(
      data => { this.classes = this.classService.createObject(data); },
      error => console.log(error)
    );
  }

  addOrRemoveClass(_class: Class) {
    if(this.event.classes == undefined) {
      this.event.classes = [];
    }

    let index = this.event.classes.indexOf(_class);

    if(index < 0) {
      this.event.classes.push(_class);
    } else {
      this.event.classes.splice(index, 1);
    }

  }

  isInEvent(_class: Class) {
    if(!this.updateForm) {
      return true;
    }
    console.log(this.event.classes);
    console.log(_class);
    let index = this.event.classes.indexOf(_class);

    console.log(index);

    if(index < 0) {
      console.log("not in event");
      return false;
    }

    return true;
  }

}
