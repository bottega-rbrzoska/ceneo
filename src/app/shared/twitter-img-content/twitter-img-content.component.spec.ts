import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterImgContentComponent } from './twitter-img-content.component';

describe('TwitterImgContentComponent', () => {
  let component: TwitterImgContentComponent;
  let fixture: ComponentFixture<TwitterImgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterImgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterImgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
