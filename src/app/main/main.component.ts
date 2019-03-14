import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GithubService } from "../shared/services/github/github.service";
import { GithubSingletonService } from "../shared/services/github/github-singleton.service";
import { User } from "../shared/models/github";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  private githubUsernameForm: FormGroup;
  private isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private githubService: GithubService,
    private githubSingletonService: GithubSingletonService
  ) {
    this.isLoading = false;
    this.initForm();
  }

  ngOnInit() {}

  private initForm() {
    this.githubUsernameForm = this.fb.group({
      username: this.fb.control("", [Validators.required])
    });
  }

  public getUser() {
    this.isLoading = true;
    const form = this.githubUsernameForm.value;
    this.githubService.getUser(form.username).subscribe(
      (user: User) => {
        this.isLoading = false;
        this.githubSingletonService.setUSer(user);
      },
      (err: Error) => {
        debugger;
        this.isLoading = false;
        console.log(err.message);
      }
    );
  }
}
