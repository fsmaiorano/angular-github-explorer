import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Components
import { SidebarComponent } from "./components/sidebar/sidebar.component";

//Material
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material/sidenav";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    SidebarComponent,
    HeaderComponent
  ]
})
export class SharedModule {}
