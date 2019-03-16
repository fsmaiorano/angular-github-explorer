import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarSingletonService {
  private showSidebar: boolean;
  @Output() emitSidebarOpen: EventEmitter<Boolean> = new EventEmitter();

  constructor() {
    this.showSidebar = false;
  }

  toggleSidebar(): void {
    console.log('singleton sidebar');
    this.showSidebar = !this.showSidebar;
    this.emitSidebarOpen.emit(this.showSidebar);
  }
}
