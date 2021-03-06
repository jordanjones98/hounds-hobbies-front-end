import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { EventRoutingModule } from './event-routing.module';
import { ViewComponent } from './view/view.component';
import { EventIndexComponent } from './event-index/event-index.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    SharedModule
  ],
  declarations: [
    ViewComponent,
    EventIndexComponent,
    RegisterComponent
  ]
})
export class EventModule { }
