import { Injectable, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SidebarSingletonService {
  private showSidebar: boolean;
  @Output() sidebarOpen: EventEmitter<Boolean> = new EventEmitter();

  constructor() {
    this.showSidebar = false;
  }

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
    this.sidebarOpen.emit(this.showSidebar);
  }
}
