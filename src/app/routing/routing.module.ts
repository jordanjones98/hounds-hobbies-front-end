import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// All app components
import { AppComponent } from '../app.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { IndexComponent } from '../index/index.component';

/**
 * Application Routes
 */
const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
