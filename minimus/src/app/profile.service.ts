import { Injectable } from '@angular/core';
import {Profile} from './profile';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: Profile[] = [
    new Profile('Default Profile', ['New York', 'London', 'Berlin'])
  ];

  constructor() { }

  saveProfile(cities: string[]): Observable<any> {
    const profileName = 'profile' + this.profiles.length;
    const profile = new Profile(profileName, cities);
    this.profiles.push(profile);

    return null;

  }



  deleteProfile(profile: Profile): Observable<any> {
    this.profiles = this.profiles.splice(this.profiles.indexOf(profile), 1);
    console.log(this.profiles);


    return null;

  }
  getProfiles() {
    return this.profiles;
  }
}
