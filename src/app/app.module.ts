import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { SharedModule } from "./shared/shared.module";
import { GithubService } from "./shared/services/github/github.service";
import { GithubSingletonService } from "./shared/services/github/github-singleton.service";
import { ProfileComponent } from './app/profile/profile.component';

@NgModule({
  declarations: [AppComponent, MainComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
