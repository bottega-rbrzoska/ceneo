import { Directive, TemplateRef, ViewContainerRef, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ceMyIf]'
})
export class MyIfDirective {

  @Input()
  set ceMyIfDupa(itemsNumber) {

    this.viewContainerRef.clear();
    if (itemsNumber && itemsNumber > 0) {
      for (let i = 0; i < itemsNumber; i++) {
        this.viewContainerRef.createEmbeddedView(this.tempRef, {
          $implicit: i,
          double: (i + 1) * 2
        });
      }
    }
  }

  constructor(private tempRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) {
    }

}
