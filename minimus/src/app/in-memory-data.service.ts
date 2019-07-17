import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const countries = [
      {city: 'Babol', country: 'Iran'},
      {city: 'Babruysk', country: 'Belarus'},
      {city: 'Bacabal', country: 'Brazil'},
      {city: 'Bacău', country: 'Romania'},
      {city: 'Bacolod', country: 'Philippines'},
      {city: 'Bacoor', country: 'Philippines'},
      {city: 'Badajoz', country: 'Spain'},
      {city: 'Badalona', country: 'Spain'},
      {city: 'Badlapur', country: 'India'},
      {city: 'Bafoussam', country: 'Cameroon'},
    ];
    return {countries};
  }

  constructor() { }
}
