import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoriesListComponent } from './repositories/repositories-list/repositories-list.component';
import { RepositoriesItemComponent } from './repositories/repositories-item/repositories-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProfileComponent,
    RepositoriesComponent,
    ProfileDetailsComponent,
    RepositoriesListComponent,
    RepositoriesItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
