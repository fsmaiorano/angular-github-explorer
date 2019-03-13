import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit
} from "@angular/core";
import { NgModel } from "@angular/forms";
import { SidebarSingletonService } from "./sidebar-singleton.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit, AfterContentInit {
  @ContentChild(NgModel) model: NgModel;
  private opened: boolean;

  constructor(private sidebarSingletonService: SidebarSingletonService) {
    this.handleSidebar();
  }

  ngOnInit() {}

  handleSidebar() {
    this.sidebarSingletonService.sidebarOpen.subscribe(isOpend => {
      this.opened = isOpend;
    });
  }

  ngAfterContentInit() {}
}
