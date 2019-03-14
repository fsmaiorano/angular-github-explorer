import { Injectable } from "@angular/core";
import { User } from "../../models/github";

@Injectable({
  providedIn: "root"
})
export class GithubSingletonService {
  private user: User;
  constructor() {}

  setUSer(user: User): void {
    this.user = user;
    localStorage.setItem("GithubExplorer:user", JSON.stringify(user));
  }

  getUser(): User {
    if (!this.user) {
      const user = JSON.parse(localStorage.getItem("GithubExplorer:user"));
      this.setUSer(user);
    }
    return this.user;
  }

  clearUser(): void {
    this.user = null;
    localStorage.removeItem("GithubExplorer:user");
  }
}
