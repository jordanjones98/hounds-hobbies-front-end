import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../../providers/Data';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() event;

  constructor(
    private router: Router,
    private data: Data
  ) { }

  ngOnInit() {
  }

  goToEvent() {
    this.data.storage = this.event;
    this.router.navigate(['/events/', this.event.slug]);
  }

}
