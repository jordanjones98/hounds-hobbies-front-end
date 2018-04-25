import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../../providers/Data';
import { Event } from '../../entity/Event';
import { Class } from '../../entity/Class';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() event: Event;

  constructor() {
  }

  ngOnInit() {
  }

  addClass(eventClass: Class) {
    console.log(eventClass);
  }

}
