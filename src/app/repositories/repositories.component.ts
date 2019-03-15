import { Component, OnInit } from '@angular/core';
import { Repository } from '../shared/models/github';
import { GithubService } from '../shared/services/github/github.service';
import { GithubSingletonService } from '../shared/services/github/github-singleton.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  private repositories: Repository[];

  constructor(
    private githubService: GithubService,
    private githubServiceSingleton: GithubSingletonService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.handleRepositories(data.type);
    });
  }

  handleRepositories(type: string) {
    switch (type) {
      case 'repositories':
        return this.getRepositories();
      case 'starred':
        return this.getStarredRepositories();

      default:
        return this.getRepositories();
    }
  }

  getRepositories() {
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

  getStarredRepositories() {
    const user = this.githubServiceSingleton.getUser();
    this.githubService.getUserStarredRepositories(user.login).subscribe(
      userRepositories => {
        this.repositories = userRepositories;
      },
      error => {
        console.log(error);
      }
    );
  }
}
