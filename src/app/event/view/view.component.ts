import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-index',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [EventService]
})
export class ViewComponent implements OnInit {
  events;

  constructor(
    private eventService : EventService
  ) {
  }

  ngOnInit() {
  }

}
