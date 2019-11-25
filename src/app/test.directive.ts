import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener, OnDestroy } from '@angular/core';

@Directive({
  exportAs: 'ceTestRef',
  selector: '[ceTest]'
})
export class TestDirective  implements OnInit, OnDestroy {

  @Input() ceTest;
  showElement = true;
  interval;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'color', 'blue');
  }

  @HostListener('click')
  onElClick() {
    this.renderer.setStyle(this.el.nativeElement, 'background', 'black')
  }

  ngOnInit() {
    this.startBlink()
 }

 startBlink() {

  this.interval = setInterval(() => {
    this.renderer.setStyle(this.el.nativeElement, 'visibility',
     this.showElement ? 'visible' : 'hidden');
     console.log(this.showElement)
     this.showElement = !this.showElement;
}, parseInt(this.ceTest) * 1000);
 }

 stopBlink() {
   clearInterval(this.interval)
 }

 ngOnDestroy() {

  clearInterval(this.interval)
 }

}
