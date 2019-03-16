import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[windowScroll]'
})
export class WindowScrollDirective {
  constructor() {
    this.init();
  }

  init() {
    window.onscroll = () => {
      console.log(window.innerHeight + document.documentElement.scrollTop);
      console.log(document.documentElement.offsetHeight);
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        return console.log('fim');
      }
      return console.log('nfim');
    };
  }
}
