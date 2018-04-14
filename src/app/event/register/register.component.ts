import { Component, OnInit } from '@angular/core';
import { Data } from '../../providers/Data';
import { Event } from '../../entity/Event';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  event: Event;

  constructor(
    private data: Data,
  ) {
    this.event = this.data.storage;
  }

  ngOnInit() {
  }

}
