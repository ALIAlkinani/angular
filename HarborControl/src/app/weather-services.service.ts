import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServicesService {
  private appId: string;
  private appCode: string;

  public data: any;

  // @ts-ignore
  constructor(private http: HttpClient) {
    this.appId = 'p1TjidZye96UkwG9FnMD';
    this.appCode = 'N-vIG8zWIDDXEuHZgsRYEA';
    this.data = [];
  }

  getWeatherData(city: string): Observable<any> {
    // @ts-ignore
    return this.http.jsonp('https://weather.api.here.com/weather/1.0/report.json?app_id=' + this.appId + '&app_code=' +
        this.appCode + '&product=observation&name=' + city, 'jsonpCallback');

  }
}


