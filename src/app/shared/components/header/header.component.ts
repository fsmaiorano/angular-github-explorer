import { Component, OnInit } from "@angular/core";
import { SidebarSingletonService } from "../sidebar/sidebar-singleton.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private showHeader: boolean;
  constructor(private sidebarSingletonService: SidebarSingletonService) {}

  ngOnInit() {
    this.showHeader = false;
  }

  private toggleSidebar(): void {
    this.sidebarSingletonService.toggleSidebar();
  }
}
