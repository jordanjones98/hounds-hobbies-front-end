import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';
import { EventModule } from './event/event.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ApiService } from './services/api.service';
import { AuthGuardService } from './services/auth-guard.service';
import { EventService } from './services/event.service';
import { AuthService } from './services/auth.service';
import { Data } from './providers/Data';

export const firebaseConfig = {
    apiKey: "AIzaSyCen_FJ-_VeBA12enUNE_JNhj20I_947cA",
    authDomain: "houndshobbiesregister.firebaseapp.com",
    databaseURL: "https://houndshobbiesregister.firebaseio.com",
    storageBucket: "houndshobbiesregister.appspot.com",
    messagingSenderId: "1057354111665"
  };

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
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig),
    EventModule
  ],
  providers: [
    ApiService,
    EventService,
    AuthService,
    AngularFireAuth,
    AuthGuardService,
    Data
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
