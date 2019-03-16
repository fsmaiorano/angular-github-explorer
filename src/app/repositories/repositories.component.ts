import { Component, OnInit } from '@angular/core';
import { Repository } from '../shared/models/github';
import { GithubService } from '../shared/services/github/github.service';
import { GithubSingletonService } from '../shared/services/github/github-singleton.service';
import { ActivatedRoute } from '@angular/router';
import { Pagination } from '../shared/utils/pagination';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  private repositoryType: string;
  private viewRepositories: Repository[];
  private repositories: Repository[];

  private currentPage: number;
  private limitItems: number;

  constructor(
    private githubService: GithubService,
    private githubServiceSingleton: GithubSingletonService,
    private activatedRoute: ActivatedRoute
  ) {
    this.currentPage = 1;
    this.limitItems = 12;
    window.onscroll = () => {
      // console.log(window.innerHeight + document.documentElement.scrollTop);
      // console.log(document.documentElement.offsetHeight);
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.currentPage++;
        return this.doRepositoriesPagination();
      }
      return console.log('nfim');
    };
  }

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
        this.currentPage = 1;
        this.repositories = userRepositories;
        this.viewRepositories = Pagination(
          userRepositories,
          this.currentPage,
          this.limitItems
        );
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
        this.currentPage = 1;
        this.repositories = userRepositories;
        this.viewRepositories = Pagination(
          userRepositories,
          this.currentPage,
          this.limitItems
        );
      },
      error => {
        console.log(error);
      }
    );
  }

  doRepositoriesPagination() {
    const moreContent = Pagination(
      this.repositories,
      this.currentPage,
      this.limitItems
    );
    this.viewRepositories = [...this.viewRepositories, ...moreContent];
  }
}
