import { Injectable } from '@angular/core';
import { User } from '../../models/github';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubSingletonService {
  private user: User;
  public userObservable = new Subject<User>();
  constructor() {
    this.userObservable.subscribe(value => {
      debugger;
    });
  }

  setUSer(user: User): void {
    this.user = user;
    this.userObservable.next(user);
    localStorage.setItem('GithubExplorer:user', JSON.stringify(user));
  }

  getUser(): User {
    if (!this.user) {
      const user = JSON.parse(localStorage.getItem('GithubExplorer:user'));
      this.setUSer(user);
      this.userObservable.next(user);
    }
    return this.user;
  }

  clearUser(): void {
    this.user = null;
    this.userObservable.next(null);
    localStorage.removeItem('GithubExplorer:user');
  }
}
