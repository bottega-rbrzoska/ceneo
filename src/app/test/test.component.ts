import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ce-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public show = false;
  data = [0, 1, 2, 3];
  constructor() { }

  ngOnInit() {
  }

}
