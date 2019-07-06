import { Component, OnInit } from '@angular/core';



import {WeatherService} from '../weather.service';
import {WeatherItem} from '../weatherItem';



@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['../app.component.css']
})
export class WeatherSearchComponent implements OnInit {



  constructor( private weather: WeatherService) {
  }


  ngOnInit() {
  }

    onSubmit(formData) {
    this.weather.getWeatherData(formData.location).subscribe(
        data => {
          const weatherItem = new WeatherItem(data.observations.location[0].city ,
              data.observations.location[0].observation[0].temperature,
              data.observations.location[0].observation[0].skyDescription,
              data.observations.location[0].observation[0].iconLink);
          this.weather.addWeatherItem(weatherItem);
        }
    );

    }
}
