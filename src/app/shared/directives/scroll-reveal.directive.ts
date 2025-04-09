import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
  
    const native = this.el.nativeElement;
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.setStyle(native, 'opacity', '1');
          this.renderer.setStyle(native, 'transform', 'none');
          observer.unobserve(native);
        }
      });
    }, {
      threshold: 0.1
    });
  
    observer.observe(native);
  }
  
}
