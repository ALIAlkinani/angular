import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIteamComponent } from './weather-iteam.component';

describe('WeatherIteamComponent', () => {
  let component: WeatherIteamComponent;
  let fixture: ComponentFixture<WeatherIteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherIteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherIteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
