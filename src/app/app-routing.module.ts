import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { GuardService } from './shared/guards/guard.service';
import { RepositoriesComponent } from './profile/repositories/repositories.component';

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
        canActivate: [GuardService]
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
