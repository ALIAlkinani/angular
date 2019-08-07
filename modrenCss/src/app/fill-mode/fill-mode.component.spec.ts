import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillModeComponent } from './fill-mode.component';

describe('FillModeComponent', () => {
  let component: FillModeComponent;
  let fixture: ComponentFixture<FillModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
