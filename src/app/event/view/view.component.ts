import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Data } from '../../providers/Data';
import { Event } from '../../entity/Event';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [EventService]
})
export class ViewComponent implements OnInit {

  event: Event;

  constructor(
    private eventService: EventService,
    private data: Data,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    /**
     * Make sure not only that it exists, but it has a name
     * (So we can be sure it is an event)
     */
    //if (this.data.storage.name !== null) {
    if (this.data.storage.name !== undefined) {
      this.event = this.data.storage;
    } else {
      console.log("Getting some params");
      this.activatedRoute.params.subscribe((params: Params) => {
        let slug = params['slug'];
        console.log(slug);
        this.eventService.getEventBySlug(slug).subscribe(
          data => {
            this.event = this.eventService.createObject(data);
            this.addEventToData();
          }
        );
      });

    }
  }

  ngOnInit() {
  }

  register() {
    if(this.data.storage.name === undefined) {
      this.data.storage = this.event;
    }
    this.router.navigate(['/events', this.event.slug, 'register']);
  }

  addEventToData() {
    this.data.storage = this.event;
  }

}
