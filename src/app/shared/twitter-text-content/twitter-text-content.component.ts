import { Component, OnInit, forwardRef } from '@angular/core';
import { TwitterContent } from '../twitter-content.class';

@Component({
  selector: 'ce-twitter-text-content',
  templateUrl: './twitter-text-content.component.html',
  styleUrls: ['./twitter-text-content.component.scss'],
  providers: [{ provide: TwitterContent, useExisting: forwardRef(() => TwitterTextContentComponent)}]

})
export class TwitterTextContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  like() {
    alert('like text!')
  }

}
