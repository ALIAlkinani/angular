import { Component, OnInit } from '@angular/core';

import {WeatherService} from '../weather.service';
import {WeatherItem} from '../weatherItem';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
 weatherItems = WeatherItem[0];
  constructor( private weatherService: WeatherService ) { }

  ngOnInit() {
    this.getWeatherItem();
  }
getWeatherItem(): void {
    this.weatherItems = this.weatherService.getWeatherItem();
}
}
