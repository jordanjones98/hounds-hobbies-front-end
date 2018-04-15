import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AddEventComponent } from './add-event/add-event.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'events/add',
    component: AddEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
