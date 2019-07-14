import {Injectable} from '@angular/core';


@Injectable()
export class GeoLocationService {
    private static  radlat1: number;
    private static radlat2: number;
    private static theta: number;
    private static radtheta: number;
    private static dist: number;

  constructor() { }

    static distance(lat: number, lng: number, lat1: number, lng1: number) {
        if ((lat === lat1) && (lng === lng1)) {
            return 0;
        } else {


            this.radlat1 = Math.PI * lat / 180;
            this.radlat2 = Math.PI * lat1 / 180;
            this.theta = lng - lng1;
            this.radtheta = Math.PI * this.theta / 180;
            this.dist = Math.sin(this.radlat1) * Math.sin(this.radlat2) + Math.cos(this.radlat1) * Math.cos(this.radlat2) *
                Math.cos(this.radtheta);
            if (this.dist > 1) {
                this.dist = 1;
            }
            this.dist = Math.acos(this.dist);
            this.dist = this.dist * 180 / Math.PI;
            this.dist = this.dist * 60 * 1.1515;
            this.dist = this.dist * 1.609344;
            return this.dist.toFixed(2);
        }
    }
}
