import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./main/main.component";
import { ProfileComponent } from "./profile/profile.component";
import { GuardService } from "./shared/guards/guard.service";

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "profile",
    component: ProfileComponent,
    canLoad: [GuardService],
    canActivate: [GuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
