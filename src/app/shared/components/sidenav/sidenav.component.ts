import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubSingletonService } from '../../services/github/github-singleton.service';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  hasUser: boolean;
  @ViewChild('drawer') drawer: MatDrawer;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private githubSingletonService: GithubSingletonService
  ) {
    this.githubSingletonService.user$.subscribe(user => {
      if (user === null || undefined) {
        this.hasUser = false;
        this.drawer.close();
      } else {
        this.hasUser = true;
      }
    });
  }

  private changeUser(): void {
    this.githubSingletonService.clearUser();
    this.router.navigateByUrl('');
  }
}
