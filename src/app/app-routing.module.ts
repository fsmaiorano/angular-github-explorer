import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { GuardService } from './shared/guards/guard.service';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canLoad: [GuardService],
    canActivate: [GuardService],
    children: [
      {
        path: 'repositories',
        component: RepositoriesComponent,
        canLoad: [GuardService],
        canActivate: [GuardService],
        data: { type: 'repositories' }
      },
      {
        path: 'repositories/starred',
        component: RepositoriesComponent,
        canLoad: [GuardService],
        canActivate: [GuardService],
        data: { type: 'starred' }
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
