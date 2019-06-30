import {Component, Input, OnInit} from '@angular/core';
import {WeatherItem} from '../weatherItem';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  @Input() weatherItem: WeatherItem;
  constructor() { }

  ngOnInit() {
  }

}
