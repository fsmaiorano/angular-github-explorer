import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { SidebarSingletonService } from './sidebar-singleton.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private opened: boolean;

  constructor(private sidebarSingletonService: SidebarSingletonService) {
    this.sidebarSingletonService.emitSidebarOpen.subscribe(isOpend => {
      debugger;
      this.opened = isOpend;
    });
  }

  ngOnInit() {}
}
