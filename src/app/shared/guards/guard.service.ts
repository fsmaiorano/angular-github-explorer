import { Injectable } from "@angular/core";
import { GithubSingletonService } from "../services/github/github-singleton.service";
import {
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { HeaderSingletonService } from "../components/header/header-singleton.service";

@Injectable({
  providedIn: "root"
})
export class GuardService {
  constructor(
    private githubSingletonService: GithubSingletonService,
    private headerSingletonService: HeaderSingletonService,
    private router: Router
  ) {}

  checkUser(): boolean {
    const user = this.githubSingletonService.getUser();

    if (!user) {
      this.headerSingletonService.hide();
      this.router.navigateByUrl("");

      return false;
    }
    this.headerSingletonService.show();
    return true;
  }

  canLoad() {
    return this.checkUser();
  }

  canActivate(): boolean {
    return this.checkUser();
  }
}
