import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public color = 'accent';
  public mode = 'indeterminate';
  public value = 50;
  @Input() size: number;
  constructor() {}

  ngOnInit() {
    // this.size = 20;
  }
}
