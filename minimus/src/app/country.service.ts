import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Country} from './country';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countriesUrl =  'api/countries';  // URL to web api;


  constructor(  private http: HttpClient) { }
  // Get countries whose name contains search term
  searchCities(term: string): Observable<Country[]> {
  if (!term.trim()) {
    // if empty search term return empty country array
    return of([]);
  }
  console.log(`${this.countriesUrl}/?name=${term}`);
  return this.http.get<Country[]>(`${this.countriesUrl}/?city=${term}`);

  }

  /** GET heroes from the server */
  getcountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl);
  }
}
