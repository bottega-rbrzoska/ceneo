import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, of, forkJoin, merge } from 'rxjs';
import { takeWhile, takeUntil, switchMap, catchError } from 'rxjs/operators';
import { TestService } from 'src/app/core/test.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ce-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  private subscriptions = new Subject();
  @Input() contact: string;
  @Output() changeName = new EventEmitter<string>();
  name: string;
  testData: string;
  constructor(private route: ActivatedRoute, testService: TestService) {
    merge(testService.getTestData(), testService.getRandomValue()).subscribe(console.log)

    route.params.
    pipe(
      takeUntil(this.subscriptions),
      switchMap(params => {
        this.name = params.name;
        return testService.getTestData().pipe(catchError( (err) => of(null))); },
       ),
      switchMap(testData => {
        return testService.getRandomValue(); })
      ).
    subscribe(randomValue => console.log(randomValue));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.next();
    this.subscriptions.complete();
  }

}
