import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
  private color = "primary";
  private mode = "indeterminate";
  private value = 50;
  @Input() size: number;
  constructor() {}

  ngOnInit() {
    // this.size = 20;
  }
}
