import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { SidebarSingletonService } from './sidebar-singleton.service';

@Component({
  selector: 'app-sidebar',
  // templateUrl: "./sidebar.component.html",
  template: `
    <mat-sidenav-container class="sidenav">
      <mat-sidenav class="sidenav__menu" mode="over" [(opened)]="opened">
        <mat-nav-list>
          <mat-list-item
            routerLinkActive="active"
            [routerLinkActive]="['is-active']"
          >
            <a [routerLink]="['/profile/repositories']">Repositories</a>
          </mat-list-item>
          <mat-list-item
            routerLinkActive="active"
            [routerLinkActive]="['is-active']"
          >
            <a [routerLink]="['/profile/repositories/starred']"
              >Starred Repositories</a
            >
          </mat-list-item>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <router-outlet windowScroll>
          <app-header></app-header>
        </router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterContentInit {
  @ContentChild(NgModel) model: NgModel;
  private opened: boolean;

  constructor(private sidebarSingletonService: SidebarSingletonService) {
    this.handleSidebar();
  }

  ngOnInit() {}

  handleSidebar() {
    this.sidebarSingletonService.sidebarOpen.subscribe(isOpend => {
      this.opened = isOpend;
    });
  }

  ngAfterContentInit() {}
}
