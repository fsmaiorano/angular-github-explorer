import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./main/main.component";
import { ProfileComponent } from "./app/profile/profile.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
