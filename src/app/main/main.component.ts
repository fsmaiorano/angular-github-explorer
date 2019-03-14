import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GithubService } from "../shared/services/github/github.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  private githubUsernameForm: FormGroup;

  constructor(private fb: FormBuilder, private githubService: GithubService) {
    this.initForm();
  }

  ngOnInit() {}

  private initForm() {
    this.githubUsernameForm = this.fb.group({
      username: this.fb.control("", [Validators.required])
    });
  }

  public getUser() {
    const form = this.githubUsernameForm.value;
    this.githubService.getUser(form.username).subscribe(responder => {
      debugger;
    });
  }
}
