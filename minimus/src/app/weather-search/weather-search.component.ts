import { Component, OnInit } from '@angular/core';



import {WeatherService} from '../weather.service';
import {WeatherItem} from '../weatherItem';
import {Observable, Subject} from 'rxjs';
import {Country} from '../country';
import {debounceTime, distinctUntilChanged, switchMap, timeout} from 'rxjs/operators';
import {CountryService} from '../country.service';



@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
    private searchTerms = new Subject<string>();
    countries$: Observable<Country[]>;
       private show  = true;
    private showCountry: string;
   private loading = false;





  constructor( private weather: WeatherService, private countryServices: CountryService ) {
  }
    search(term: string): void {
        this.show = true;
        this.searchTerms.next(term);

    }

  ngOnInit(): void {
     this.countries$ = this.searchTerms.pipe(
         debounceTime(300),
         // ignore new trem if the same as previous term
         distinctUntilChanged(),
         // switch to the new observable each time the term changes
         switchMap((term: string) => this.countryServices.searchCities(term)),
     );

  }

    onSubmit(formData) {
      this.loading = true;
      timeout(100000000);

      this.weather.getWeatherData(formData.city).subscribe(
              data => {
                  try {
                      const weatherItem = new WeatherItem(data.observations.location[0].city,
                          data.observations.location[0].observation[0].temperature,
                          data.observations.location[0].observation[0].skyDescription,
                          data.observations.location[0].observation[0].iconLink);
                      this.weather.addWeatherItem(weatherItem);

                  } catch (e) {
                      console.log('Error', e.toString());
                  }
              }
          );



      this.loading = false;
  }

    clear() {
        this.weather.clearWeatherItems();
    }


    onSelect(country: Country) {
        this.onSubmit(country);
        this.show = false;
        this.showCountry = country.city;
           }

}
