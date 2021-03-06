import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: 'img[Lazyloading]'
})
export class LazyloadingDirective implements AfterViewInit {
  @HostBinding('attr.src') srcAttr = null;
  @Input() src: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {
    const obs = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          entry.target.classList.add('skeleton');
          if (entry.isIntersecting) {
            this.loadImage();
            obs.unobserve(this.el.nativeElement);
          }
        });
      }
    );
    obs.observe(this.el.nativeElement);
  }

  private loadImage() {
    this.srcAttr = this.src;
  }
}
