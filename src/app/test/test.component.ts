import { Component, OnInit, Inject } from '@angular/core';
import { TestService } from '../test.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { MyToken } from '../tokens/my-token.token';
import { share } from 'rxjs/operators';

@Component({
  selector: 'ce-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  testData$;
  public show = false;
  data = [0, 1, 2, 3];
  constructor(private testService: TestService) {
    this.testData$ = testService.getTestData().pipe(share())
  }

  ngOnInit() {
  }

}
