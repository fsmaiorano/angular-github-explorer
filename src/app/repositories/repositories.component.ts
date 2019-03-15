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
  private repositoryType: string;
  private repositories: Repository[];

  constructor(
    private githubService: GithubService,
    private githubServiceSingleton: GithubSingletonService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.repositories = [];
    this.activatedRoute.data.subscribe(data => {
      this.handleRepositories(data.type);
    });
  }

  handleRepositories(repositoryType: string) {
    this.repositoryType = repositoryType;
    switch (repositoryType) {
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
        console.log(userRepositories);
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
        console.log(userRepositories);
        this.repositories = userRepositories;
      },
      error => {
        console.log(error);
      }
    );
  }
}
