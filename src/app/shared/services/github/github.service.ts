import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";

import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

// Models
import { User } from "../../models/github";

// Environment
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<User> {
    return this.http.get(`${environment.apiUrl}/users/${username}`).pipe(
      map((githubUser: User) => {
        if (!githubUser) {
          throw new Error();
        }
        return githubUser;
      })
    );
  }
}
