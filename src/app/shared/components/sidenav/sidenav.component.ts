import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubSingletonService } from '../../services/github/github-singleton.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  hasUser: boolean;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private githubSingletonService: GithubSingletonService,
    private router: Router
  ) {
    this.githubSingletonService.userObservable.subscribe(user => {
      if (!user) {
        return (this.hasUser = false);
      }
      return (this.hasUser = true);
    });
  }

  private changeUser(): void {
    this.githubSingletonService.clearUser();
    this.router.navigateByUrl('');
  }
}
