import { Component } from '@angular/core';
import { SidebarSingletonService } from './shared/components/sidebar/sidebar-singleton.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private opened: boolean;
  title = 'angular-github-explorer';

  constructor(private sidebarSingletonService: SidebarSingletonService) {
    this.sidebarSingletonService.emitSidebarOpen.subscribe(isOpend => {
      debugger;
      this.opened = isOpend;
    });
  }
}
