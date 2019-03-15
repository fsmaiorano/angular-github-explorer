import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';

// Models
import { User, Repository } from '../../models/github';

// Environment
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<User> {
    return this.http.get(`${environment.apiUrl}/users/${username}`).pipe(
      take(1),
      map((githubUser: User) => {
        if (!githubUser) {
          throw new Error();
        }
        return githubUser;
      })
    );
  }

  getUserRepositories(username: string): Observable<Repository[]> {
    return this.http.get(`${environment.apiUrl}/users/${username}/repos`).pipe(
      take(1),
      map((githubUserRepositories: Repository[]) => {
        if (!githubUserRepositories) {
          throw new Error();
        }
        return githubUserRepositories;
      })
    );
  }
}
