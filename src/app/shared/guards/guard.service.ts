import { Injectable } from '@angular/core';
import { GithubSingletonService } from '../services/github/github-singleton.service';
import {
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  constructor(
    private githubSingletonService: GithubSingletonService,
    private router: Router
  ) {}

  checkUser(): boolean {
    const user = this.githubSingletonService.getUser();

    if (!user) {
      this.router.navigateByUrl('');

      return false;
    }
    return true;
  }

  canLoad() {
    return this.checkUser();
  }

  canActivate(): boolean {
    return this.checkUser();
  }
}
