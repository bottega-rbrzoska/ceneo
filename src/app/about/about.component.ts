import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ce-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() contact: string;
  constructor() { }

  ngOnInit() {
  }

}
