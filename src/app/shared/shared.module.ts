import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Components
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

//Material
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatInputModule
} from "@angular/material";

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule
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
    ReactiveFormsModule
  ]
})
export class SharedModule {}
