import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';
import { Data } from '../../providers/Data';
import { Event } from '../../entity/Event';
import { User } from '../../entity/User';
import { UserProvider } from '../../providers/User';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [EventService]
})
export class ViewComponent implements OnInit {

  event: Event;
  register: boolean = false;
  user: User;

  constructor(
    private eventService: EventService,
    private userService: UserService,
    private data: Data,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userProvider: UserProvider
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
    this.user = this.userProvider.user;
  }

  registerUser() {
    this.user.events.push(this.event);
    this.userService.addEvent(this.user).subscribe();
  }

  addEventToData() {
    this.data.storage = this.event;
  }

  userRegisteredForEvent() {
    if(this.user.events.indexOf(this.event) < 0) {
      return false;
    }
    return true;
  }

}
