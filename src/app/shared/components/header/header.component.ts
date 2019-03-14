import { Component, OnInit } from "@angular/core";
import { SidebarSingletonService } from "../sidebar/sidebar-singleton.service";
import { HeaderSingletonService } from "./header-singleton.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private showHeader: boolean;
  constructor(
    private sidebarSingletonService: SidebarSingletonService,
    private headerSingletonService: HeaderSingletonService
  ) {
    this.headerSingletonService.emitShowHeader.subscribe(show => {
      this.showHeader = show;
    });
  }

  ngOnInit() {}

  private toggleSidebar(): void {
    this.sidebarSingletonService.toggleSidebar();
  }
}
