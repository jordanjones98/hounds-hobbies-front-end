import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  events;

  constructor() { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.events = [
      {
        "eventName": "Sunday Fun-day"
      },
      {
        "eventName": "Rookie Racers"
      },
      {
        "eventName": "Saturday Races"
      }
    ];
  }

}
