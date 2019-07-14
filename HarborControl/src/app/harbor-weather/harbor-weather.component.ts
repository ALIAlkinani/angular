import { Component, OnInit } from '@angular/core';
import {WeatherServicesService} from '../weather-services.service';
import {WeatherIteams} from '../weather-iteams';
import {MockWeatherItesms} from '../mock-weather-itesms';

@Component({
  selector: 'app-harbor-weather',
  templateUrl: './harbor-weather.component.html',
  styleUrls: ['./harbor-weather.component.css']
})
export class HarborWeatherComponent implements OnInit {
  private weatherItem = new WeatherIteams();
  private  weatherItems = MockWeatherItesms;
  constructor(private weather: WeatherServicesService) { }

  private loadWeather() {
    this.weather.getWeatherData('Sydney Harbour').subscribe(
        data => {
         this.weatherItem.cityName =   data.observations.location[0].city;
         this.weatherItem.temperature = data.observations.location[0].observation[0].temperature;
         this.weatherItem.description =  data.observations.location[0].observation[0].skyDescription;
         this.weatherItem.img = data.observations.location[0].observation[0].iconLink;
         this.weatherItem.windSpeed = data.observations.location[0].observation[0].windSpeed;
         }
         );
    this.weatherItems.push(this.weatherItem);

  }



  ngOnInit() {
    this.loadWeather();
  }

}
