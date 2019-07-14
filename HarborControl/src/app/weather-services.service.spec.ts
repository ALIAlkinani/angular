import { TestBed } from '@angular/core/testing';

import { WeatherServicesService } from './weather-services.service';

describe('WeatherServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherServicesService = TestBed.get(WeatherServicesService);
    expect(service).toBeTruthy();
  });
});
