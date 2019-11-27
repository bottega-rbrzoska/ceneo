import { Component, OnInit, forwardRef } from '@angular/core';
import { TwitterContent } from '../twitter-content.class';

@Component({
  selector: 'ce-twitter-img-content',
  templateUrl: './twitter-img-content.component.html',
  styleUrls: ['./twitter-img-content.component.scss'],
  providers: [{ provide: TwitterContent, useExisting: forwardRef(() => TwitterImgContentComponent)}]
})
export class TwitterImgContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  like() {
    alert('like image!')
  }

}
