import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  private githubUsernameForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    debugger;
  }
}
