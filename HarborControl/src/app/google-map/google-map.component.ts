import {Component, OnInit} from '@angular/core';

import {GeoLocationService} from '../geo-location.service';

import {MockFerries} from '../mock-ferries';

import {MockWeatherItesms} from '../mock-weather-itesms';


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

    ferries = MockFerries;
    lat = -33.8655291;
    lng = 151.2036936;
    speed = 1;

  private lat1: number;
  private  lng1: number;

private weatheritems = MockWeatherItesms;
private geoLocationServices = GeoLocationService;
    private number: number;
    private arrival = true;

  constructor(   ) {

     if (!navigator.geolocation) {
      return;
    }

    // timeout at 60000 milliseconds (60 seconds)

     navigator.geolocation.watchPosition(position => {

      this.lat1 = +position.coords.latitude;
      this.lng1 = + position.coords.longitude;
      this.speed = +position.coords.speed;
      this.move();
      this.getdistance( this.lat,  this.lng);

     });
  }

    private getdistance(lat: number, lng: number) {
        // tslint:disable-next-line:prefer-for-of

        for (let i = 0; i < this.ferries.length; i++) {
            this.arrival = true;
            this.ferries[i].distance = +this.geoLocationServices.distance(
                lat, lng, this.ferries[i].lat , this.ferries[i].lng - this.number);
            console.log('distance', this.ferries[i].distance);

            if (this.ferries[i].distance <= 4 || this.ferries[i].leaving) {
               this.ferries[i].lng = this.ferries[i].lng + this.number;
               this.ferries[i].leaving = true;

           } else {
                   // tslint:disable-next-line:prefer-for-of
                   for ( let d = 0; d < this.ferries.length; d++) {
                   if (d !== i) {
                       console.log('D:', d, this.ferries[d].distance);
                       if (this.ferries[d].distance <= 10) {
                           this.arrival = false;
                       }

                   }

                  }
                   if (this.arrival && this.weatheritems[0].windSpeed > 10 && this.weatheritems[0].windSpeed < 35 ) {
                      console.log('value', this.ferries[i].lng - this.number);
                      this.ferries[i].lng = this.ferries[i].lng - this.number;
               }

           }
            if (this.ferries[i].distance >= 30 ) {
                this.ferries[i].leaving = false;
            }


    }




  }

    private move() {
     this.number =  Math.random() * 0.041123;
     console.log('random number:', this.number.toFixed(7));

    }




    ngOnInit() {
  }
}


