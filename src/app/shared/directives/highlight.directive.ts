import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ceHighlight]'
})
export class HighlightDirective {

  @Input() ceHighlight;
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.addClass(this.el.nativeElement, this.ceHighlight || 'highlight');
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.renderer.removeClass(this.el.nativeElement, this.ceHighlight || 'highlight');
  }
}
