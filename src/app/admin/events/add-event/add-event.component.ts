import { Component, OnInit } from '@angular/core';

import { Event } from '../../../entity/Event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event: Event = new Event();
  updateForm: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

}
