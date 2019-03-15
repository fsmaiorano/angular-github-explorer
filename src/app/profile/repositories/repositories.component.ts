import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../shared/services/github/github.service';
import { GithubSingletonService } from '../../shared/services/github/github-singleton.service';
import { Repository } from '../../shared/models/github';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  private repositories: Repository[];
  constructor(
    private githubService: GithubService,
    private githubServiceSingleton: GithubSingletonService
  ) {}

  ngOnInit() {
    const user = this.githubServiceSingleton.getUser();
    this.githubService.getUserRepositories(user.login).subscribe(
      userRepositories => {
        this.repositories = userRepositories;
      },
      error => {
        console.log(error);
      }
    );
  }
}
