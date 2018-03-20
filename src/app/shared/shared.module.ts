import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './event-card/event-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EventCardComponent
  ],
  exports: [
    EventCardComponent
  ]
})
export class SharedModule { }
