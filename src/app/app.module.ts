import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ApiService } from './services/api.service';
import { EventService } from './services/event.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    IndexComponent,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    HttpModule,
    SharedModule
  ],
  providers: [
    ApiService,
    EventService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
