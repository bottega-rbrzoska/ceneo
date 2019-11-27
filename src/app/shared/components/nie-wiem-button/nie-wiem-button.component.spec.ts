import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieWiemButtonComponent } from './nie-wiem-button.component';

describe('NieWiemButtonComponent', () => {
  let component: NieWiemButtonComponent;
  let fixture: ComponentFixture<NieWiemButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieWiemButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieWiemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
