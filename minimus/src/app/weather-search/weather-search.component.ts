import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {WeatherService} from '../weather.service';


@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['../app.component.css']
})
export class WeatherSearchComponent implements OnInit {
  private searchStream = new Subject<string>();
  data: any = {};


  constructor( private weatherService: WeatherService) { }

  ngOnInit() {
  }

    onSubmit(formData) {
      alert('You location is : ' + formData.location);
    }
}
