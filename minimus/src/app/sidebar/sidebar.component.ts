import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';
import {WeatherService} from '../weather.service';
import {ProfileService} from '../profile.service';
import {WeatherItem} from '../weatherItem';
import {CountryService} from '../country.service';
import {Country} from '../country';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  countries: Country[];
  profiles: Profile[];

  // tslint:disable-next-line:max-line-length
  constructor(private profileServices: ProfileService, private weatherServices: WeatherService , private  countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
    this.profiles = this.profileServices.getProfiles();
  }
  getCountries(): void {
    this.countryService.getcountries()
        .subscribe( countries => this.countries = countries);
  }

    onSaveNew() {
      // tslint:disable-next-line:only-arrow-functions
    const cities = this.weatherServices.getWeatherItem().map(function(value) {
      return value.cityName;

    });
    this.profileServices.saveProfile(cities);
    }

  onLoadProfile(profile: Profile) {
    this.weatherServices.clearWeatherItems();

    for (let i = 0; i <= profile.cities.length; i++) {
        this.weatherServices.getWeatherData(profile.cities[i]).subscribe(data => {
          const weatherItem = new WeatherItem(data.observations.location[0].city ,
              data.observations.location[0].observation[0].temperature,
              data.observations.location[0].observation[0].skyDescription,
              data.observations.location[0].observation[0].iconLink);
          this.weatherServices.addWeatherItem(weatherItem);
      });
    }

  }

  onDeleteProfile($event: MouseEvent, profile: Profile) {
    $event.stopPropagation();
    this.profileServices.deleteProfile(profile);

  }
}
