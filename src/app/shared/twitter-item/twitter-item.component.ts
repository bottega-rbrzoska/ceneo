import { Component, OnInit, ContentChild } from '@angular/core';
import { TwitterImgContentComponent } from '../twitter-img-content/twitter-img-content.component';
import { TwitterContent } from '../twitter-content.class';

@Component({
  selector: 'ce-twitter-item',
  templateUrl: './twitter-item.component.html',
  styleUrls: ['./twitter-item.component.scss']
})
export class TwitterItemComponent implements OnInit {
  @ContentChild('content', { static: true, read: TwitterContent}) comp: TwitterContent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }
  like() {
    this.comp.like()
  }

}
