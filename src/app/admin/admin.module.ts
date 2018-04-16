import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './index/index.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { EventFormComponent } from './events/event-form/event-form.component';
import { ViewEventsComponent } from './events/view-events/view-events.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [IndexComponent, AddEventComponent, EditEventComponent, EventFormComponent, ViewEventsComponent]
})
export class AdminModule { }
