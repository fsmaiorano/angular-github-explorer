import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../shared/services/github/github.service';
import { GithubSingletonService } from '../../shared/services/github/github-singleton.service';
import { Repositories } from '../../shared/models/github';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  private repositories: Repositories;
  constructor(
    private githubService: GithubService,
    private githubServiceSingleton: GithubSingletonService
  ) {}

  ngOnInit() {
    const user = this.githubServiceSingleton.getUser();
    this.githubService.getUserRepositories(user.login);
  }
}
