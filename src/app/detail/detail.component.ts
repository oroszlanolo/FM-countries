import { Component } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Location } from '@angular/common';
import { CountryService } from '../country.service';
import { Country } from 'src/country';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  country? : Country;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private countryService: CountryService
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.getCountry();
      }
    });
  }
  ngOnInit(): void {
    this.getCountry();
  }
  
  goBack(): void {
    this.location.back();
  }
  
  getCountry(): void {
    const code = this.route.snapshot.paramMap.get('code');
    this.countryService.getCountry(code!)
      .subscribe(countries => this.country = countries.length > 0 ? countries[0] : undefined);
  }

  getNativeName() : string {
    if(!this.country) {
      return ''
    }
    const nativeNames = this.country.name.nativeName;
    return nativeNames[Object.keys(nativeNames)[0]].common;
  }
  
  getCurrencies() : string {
    if(!this.country) {
      return '';
    }
    const currencies = this.country.currencies;
    const ret = [];
    return Object.values(currencies).map(c => c.name).join(',');
  }

  getLanguages() : string {
    if(!this.country) {
      return '';
    }
    return Object.values(this.country.languages).join(',');
  }

  selectCountry(code: string) {
    this.router.navigate([`/detail/${code}`]);
  }
}
