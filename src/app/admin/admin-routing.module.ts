import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { ViewEventsComponent } from './events/view-events/view-events.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { AddClassComponent } from './classes/add-class/add-class.component';
import { ViewClassesComponent } from './classes/view-classes/view-classes.component';
import { EditClassComponent } from './classes/edit-class/edit-class.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';

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
  },
  {
    path: 'classes/add',
    component: AddClassComponent
  },
  {
    path: 'classes/view',
    component: ViewClassesComponent
  },
  {
    path: 'classes/edit/:slug',
    component: EditClassComponent
  },
  {
    path: 'users/view',
    component: ViewUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
