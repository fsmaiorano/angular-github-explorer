import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/github';
import { GithubSingletonService } from '../shared/services/github/github-singleton.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user: User;
  constructor(private githubSingletonService: GithubSingletonService) {}

  ngOnInit() {
    this.user = this.githubSingletonService.getUser();
  }
}
