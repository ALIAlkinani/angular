import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMentComponent } from './pay-ment.component';

describe('PayMentComponent', () => {
  let component: PayMentComponent;
  let fixture: ComponentFixture<PayMentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayMentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayMentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
