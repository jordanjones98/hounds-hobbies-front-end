import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../entity/Event';
import { Class } from '../../../entity/Class';
import { EventService } from '../../../services/event.service';
import { ClassService } from '../../../services/class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  @Input() event: Event;
  @Input() updateForm: boolean;

  classes;

  constructor(
    private eventService: EventService,
    private classService: ClassService,
    private router: Router
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
        this.router.navigate(['/admin/events/view']);
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
    this.router.navigate(['/admin/events/view']);
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

    this.event.classes.forEach((eventClass, index) => {
      if(eventClass.id == _class.id) {
        this.event.classes.splice(index, 1);
        inEvent = true;
        return;
      }
    });

    if(!inEvent) {
      this.event.classes.push(_class);
    }

  }

  isInEvent(_class: Class) {
    if(!this.updateForm) {
      return false;
    }
    for(let eventClass of this.event.classes) {
      if(eventClass.id == _class.id) {
        return true;
      }
    }

    return false;
  }

}
