import { Component, OnInit } from '@angular/core';

import { Data } from '../../../providers/Data';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  event: Event;

  constructor(
    private data: Data
  ) {
    this.event = this.data.storage;
  }

  ngOnInit() {
  }

}
