import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "../shared/models/github";

//Services
import { SnackbarService } from "../shared/components/snackbar/snackbar.service";
import { GithubService } from "../shared/services/github/github.service";
import { GithubSingletonService } from "../shared/services/github/github-singleton.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { HeaderSingletonService } from "../shared/components/header/header-singleton.service";

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
    private githubSingletonService: GithubSingletonService,
    private snackbarService: SnackbarService,
    private headerSingletonService: HeaderSingletonService,
    private router: Router
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
        this.headerSingletonService.show();
        this.router.navigateByUrl("/profile");
      },
      (err: HttpErrorResponse) => {
        this.isLoading = false;
        if (err.status === 404) {
          return this.snackbarService.open("User not found! 😥");
        } else {
          return this.snackbarService.open(err.message);
        }
      }
    );
  }
}
