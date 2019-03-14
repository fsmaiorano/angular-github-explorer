import { Component, OnInit } from "@angular/core";
import { SidebarSingletonService } from "../sidebar/sidebar-singleton.service";
import { HeaderSingletonService } from "./header-singleton.service";
import { GithubSingletonService } from "../../services/github/github-singleton.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private showHeader: boolean;
  constructor(
    private router: Router,
    private sidebarSingletonService: SidebarSingletonService,
    private headerSingletonService: HeaderSingletonService,
    private githubSingletonService: GithubSingletonService
  ) {
    this.headerSingletonService.emitShowHeader.subscribe(show => {
      this.showHeader = show;
    });
  }

  ngOnInit() {}

  private toggleSidebar(): void {
    this.sidebarSingletonService.toggleSidebar();
  }

  private changeUser(): void {
    this.headerSingletonService.hide();
    this.githubSingletonService.clearUser();
    this.router.navigateByUrl("");
  }
}
