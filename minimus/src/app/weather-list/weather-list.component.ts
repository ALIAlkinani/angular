import { Component, OnInit } from '@angular/core';
import {WeatherItems} from '../mock-weatherItems';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
 weatherItems = WeatherItems;
  constructor() { }

  ngOnInit() {
  }

}
