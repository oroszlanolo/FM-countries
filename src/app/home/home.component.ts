import { Component, OnInit } from '@angular/core';
import { Country } from 'src/country';
import { CountryService } from '../country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries: Country[] = [];
  searchText: string = '';
  regions = [
    "africa",
    "america",
    "asia",
    "europe",
    "oceania"
  ]
  showDropdown = false;
  filter? : string;

  constructor(private router: Router, private countryService : CountryService) {}

  ngOnInit(): void {
    this.getCountries();
  }
  
  getCountries() {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries);
  }

  doSearch() {
    if(this.searchText.length > 0) {
      this.countryService.searchCountry(this.searchText)
        .subscribe(countries => this.countries = countries);
      this.filter = undefined;
    } else {
      this.getCountries();
    }
  }

  toggleDropdown(event? : Event) {
    event?.preventDefault();
    this.showDropdown = !this.showDropdown;
  }
  doFilter(region : string) {
    this.showDropdown = false;
    this.filter = region;
    this.countryService.searchRegion(region).subscribe(countries => this.countries = countries);
  }

  selectCountry(code: string) {
    this.router.navigate([`/detail/${code}`]);
  }
}
