import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { ViewEventsComponent } from './events/view-events/view-events.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'events/add',
    component: AddEventComponent
  },
  {
    path: 'events/view',
    component: ViewEventsComponent
  },
  {
    path: 'events/edit/:slug',
    component: EditEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
