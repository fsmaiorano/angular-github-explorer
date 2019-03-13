import { Component, OnInit } from "@angular/core";
import { SidebarSingletonService } from "../sidebar/sidebar-singleton.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private sidebarSingletonService: SidebarSingletonService) {}

  ngOnInit() {}

  private toggleSidebar(): void {
    this.sidebarSingletonService.toggleSidebar();
  }
}
