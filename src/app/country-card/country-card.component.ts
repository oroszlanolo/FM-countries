import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from 'src/country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent {
  @Input() country! : Country;
  @Output() click = new EventEmitter<Event>();

  doClick(event : Event) {
    this.click.emit(event);
  } 
}
