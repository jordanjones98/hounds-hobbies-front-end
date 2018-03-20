import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { EventIndexComponent } from './event-index/event-index.component';

const routes: Routes = [
  {
    path: '',
    component: EventIndexComponent
  },
  {
    path: ':slug',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
