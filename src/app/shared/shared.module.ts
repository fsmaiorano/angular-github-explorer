import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollingModule } from '@angular/cdk/scrolling';

//Components
import { LoaderComponent } from './components/loader/loader.component';

//Material
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatListModule,
  MatCardModule,
  MatTooltipModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { WindowScrollDirective } from './directives/window-scroll.directive';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LazyloadingDirective } from './directives/lazyloading.directive';

@NgModule({
  declarations: [
    LoaderComponent,
    WindowScrollDirective,
    SidenavComponent,
    LazyloadingDirective
  ],
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
    MatSnackBarModule,
    RouterModule,
    MatListModule,
    ScrollingModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    LoaderComponent,
    MatSnackBarModule,
    RouterModule,
    MatListModule,
    ScrollingModule,
    MatCardModule,
    MatTooltipModule,
    WindowScrollDirective,
    SidenavComponent,
    LazyloadingDirective
  ]
})
export class SharedModule {}
