import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'ce-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() homeTitle: string;

  constructor() {
    console.log(this.homeTitle);
  }

  ngOnInit() {
    console.log(this.homeTitle);
  }

}
