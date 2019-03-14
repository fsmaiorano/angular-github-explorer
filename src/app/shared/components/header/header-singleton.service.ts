import { Injectable, Output, EventEmitter } from "@angular/core";
import { GithubSingletonService } from "../../services/github/github-singleton.service";

@Injectable({
  providedIn: "root"
})
export class HeaderSingletonService {
  private showHeader: boolean;
  @Output() public emitShowHeader: EventEmitter<Boolean> = new EventEmitter();

  constructor(private githubSingletonService: GithubSingletonService) {
    this.canShowHeader();
  }

  canShowHeader(): void {
    const user = this.githubSingletonService.getUser();
    if (!user) {
      this.showHeader = false;
    }
    this.showHeader = true;
    this.emitShowHeader.emit(this.showHeader);
  }

  toggleHeader(): void {
    this.showHeader = !this.showHeader;
    this.emitShowHeader.emit(this.showHeader);
  }

  show(): void {
    this.showHeader = true;
    this.emitShowHeader.emit(this.showHeader);
  }

  hide(): void {
    this.showHeader = false;
    this.emitShowHeader.emit(this.showHeader);
  }
}
