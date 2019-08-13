import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDesignComponent } from './banner-design.component';

describe('BannerDesignComponent', () => {
  let component: BannerDesignComponent;
  let fixture: ComponentFixture<BannerDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
