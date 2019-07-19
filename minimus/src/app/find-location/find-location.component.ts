import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';


import { ViewChild, ElementRef, NgZone } from '@angular/core';
import {WeatherItem} from '../weatherItem';
import {WeatherService} from '../weather.service';
import {CountryService} from '../country.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-find-location',
  templateUrl: './find-location.component.html',
  styleUrls: ['./find-location.component.css']
})
export class FindLocationComponent implements OnInit {
  @ViewChild('city') public searchElement: ElementRef;
  private componentForm = {
    administrative_area_level_1: 'short_name',
    country: 'long_name',

  };
  loading: any;
  private str: string[] = [];
  constructor( private weather: WeatherService, private countryServices: CountryService,
               private messageServices: MessageService,  private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
  }
  ngOnInit() {
    this.mapsAPILoader.load().then(
        () => {
          // tslint:disable-next-line:max-line-length
          const autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: ['geocode']});

          autocomplete.setFields(['address_component']);

          autocomplete.addListener('place_changed', () => {
            this.ngZone.run(() => {
              const place = autocomplete.getPlace();
              this.str = [];
              console.log('place', place);
               // Get each component of the address from the place details,
              // and then fill-in the corresponding field on the form.
              // tslint:disable-next-line:prefer-for-of
              this.str.push(place.address_components[0].long_name);
              for (let i = 1; i < place.address_components.length; i++) {
                const addressType = place.address_components[i].types[0];
                if (this.componentForm[addressType]) {
                  const val = place.address_components[i][this.componentForm[addressType]];
                  this.str.push(val);

              }

              }
              console.log('location', this.str[0]);
              this.weatherFound(this.str[0]);
              if (place.geometry === undefined || place.geometry === null ) {
                return;
              }
            });
          });
        }
    );
  }
  onSubmit(formData) {
    this.weatherFound(formData.city);
  }

  clear() {
    this.weather.clearWeatherItems();
  }

  private weatherFound(city: string | string) {
    console.log(city);
    this.loading = true;
    this.weather.getWeatherData(city).subscribe(
        data => {
          try {
            const weatherItem = new WeatherItem(data.observations.location[0].city,
                data.observations.location[0].observation[0].temperature,
                data.observations.location[0].observation[0].skyDescription,
                data.observations.location[0].observation[0].iconLink);
            this.weather.addWeatherItem(weatherItem);
            this.messageServices.showSpecificNotification('success',
                'The weather data were received successfully',
                'weatherDataSuccess1');

          } catch (e) {
            this.messageServices.showSpecificNotification('error', e.toString(), 'error1');
          }
        });



    this.loading = false;
  }
}
