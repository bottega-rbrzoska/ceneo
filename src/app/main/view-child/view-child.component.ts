import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, ContentChild, AfterContentInit } from '@angular/core';
import { MyIfDirective } from 'src/app/shared/directives/my-if.directive';
import { fromEvent, pipe } from 'rxjs';
import { map, debounceTime, switchMap } from 'rxjs/operators';
import { TestService } from 'src/app/core/test.service';
import { TwitterImgContentComponent } from 'src/app/shared/twitter-img-content/twitter-img-content.component';

@Component({
  selector: 'ce-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements AfterViewInit, AfterContentInit {

  @ViewChild('test', { static: false }) divEl: ElementRef;
  @ViewChild('myInput', { static: false }) input: ElementRef;
  @ViewChild(MyIfDirective, { static: false }) directive: MyIfDirective;

  @ViewChildren('test') divElements: QueryList<ElementRef>;


  constructor(private testService: TestService) { }

  ngAfterViewInit() {
    console.log(this.divEl);
    console.log(this.divElements);
    console.log(this.directive);
    fromEvent(this.input.nativeElement, 'keyup')
    .pipe(
      map((ev: any) => ev.target.value),
      debounceTime(400),
      switchMap(val => this.testService.getRandomValue() )
    )
    .subscribe(console.log);
  }

  ngAfterContentInit() {
  }

}
