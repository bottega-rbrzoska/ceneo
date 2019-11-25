import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[ceTest]'
})
export class TestDirective  implements OnInit {

  @Input() ceTest;
  showElement = true;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'color', 'blue');
  }

  @HostListener('click')
  onElClick() {
    this.renderer.setStyle(this.el.nativeElement, 'background', 'black')
  }

  ngOnInit() {
    setInterval(() => {
      this.renderer.setStyle(this.el.nativeElement, 'visibility',
       this.showElement ? 'visible' : 'hidden');
       console.log(this.showElement)
       this.showElement = !this.showElement;
  }, parseInt(this.ceTest) * 1000);
}

}
