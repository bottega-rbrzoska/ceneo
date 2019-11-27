import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { TestService } from '../../core/test.service';

@Component({
  selector: 'ce-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = 0;
  @Input() homeTitle: string;

  constructor() {
    console.log(this.homeTitle);
  }

  ngOnInit() {
    console.log(this.homeTitle);
  }

}
