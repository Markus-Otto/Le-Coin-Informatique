import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Section visible !');
          this.renderer.addClass(this.el.nativeElement, 'revealed');
          this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 1s ease, transform 1s ease');
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(this.el.nativeElement);
  }
}
