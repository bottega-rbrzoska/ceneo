import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterTextContentComponent } from './twitter-text-content.component';

describe('TwitterTextContentComponent', () => {
  let component: TwitterTextContentComponent;
  let fixture: ComponentFixture<TwitterTextContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterTextContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterTextContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
