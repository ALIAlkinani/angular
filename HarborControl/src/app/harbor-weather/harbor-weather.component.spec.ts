import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarborWeatherComponent } from './harbor-weather.component';

describe('HarborWeatherComponent', () => {
  let component: HarborWeatherComponent;
  let fixture: ComponentFixture<HarborWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarborWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarborWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
