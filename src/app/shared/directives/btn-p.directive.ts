import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[btnP]' // Utilisation : <button btnP>
})
export class BtnPDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'button-primary');
  }
}
