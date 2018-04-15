import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './index/index.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EventFormComponent } from './event-form/event-form.component';
import { ViewEventsComponent } from './view-events/view-events.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [IndexComponent, AddEventComponent, EditEventComponent, EventFormComponent, ViewEventsComponent]
})
export class AdminModule { }
