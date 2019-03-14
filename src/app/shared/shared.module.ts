import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Components
import { HeaderComponent } from "./components/header/header.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

//Material
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
} from "@angular/material";

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, LoaderComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    SidebarComponent,
    HeaderComponent,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    LoaderComponent,
    MatSnackBarModule
  ]
})
export class SharedModule {}
