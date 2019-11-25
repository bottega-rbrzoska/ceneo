import { Component, OnInit, Inject } from '@angular/core';
import { TestService } from '../test.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { MyToken } from '../tokens/my-token.token';

@Component({
  selector: 'ce-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public show = false;
  data = [0, 1, 2, 3];
  constructor(@Inject(MyToken) private testService: TestService) {
    console.log(testService)
  }

  ngOnInit() {
  }

}
