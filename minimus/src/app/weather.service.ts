import { Injectable } from '@angular/core';
import {WeatherItem} from './weatherItem';
import {WeatherItems} from './mock-weatherItems';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  getWeatherItem(): WeatherItem[] {
    return WeatherItems;
  }

  constructor() { }
}
