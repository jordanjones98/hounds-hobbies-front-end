import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

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
    path: 'user',
    loadChildren: '../user/user.module#UserModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'events',
    loadChildren: '../event/event.module#EventModule'
  },
  {
    path: 'admin',
    loadChildren: '../admin/admin.module#AdminModule'
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
    RouterModule,
  ]
})
export class RoutingModule { }
