import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = 'https://restcountries.com/v3.1/';
  allEndpoint = 'all';
  searchEndpoint = 'name/';
  codeEndpoint = 'alpha/';
  regionEndpoint = 'region/';

  constructor(private http : HttpClient) { }

  getCountries() : Observable<Country[]> {
    return this.http.get<Country[]>(this.url + this.allEndpoint);
  }
  getCountry(code: string) : Observable<Country[]> {
    return this.http.get<Country[]>(this.url + this.codeEndpoint + code);
  }
  searchCountry(text: string) : Observable<Country[]> {
    return this.http.get<Country[]>(this.url + this.searchEndpoint + text);
  }
  searchRegion(region: string) : Observable<Country[]> {
    return this.http.get<Country[]>(this.url + this.regionEndpoint + region);
  }
}
