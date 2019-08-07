import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaracastTaqComponent } from './laracast-taq.component';

describe('LaracastTaqComponent', () => {
  let component: LaracastTaqComponent;
  let fixture: ComponentFixture<LaracastTaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaracastTaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaracastTaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
