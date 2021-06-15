import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-per-capital',
  templateUrl: './per-capital.component.html',
  styles: [
  ]
})
export class PerCapitalComponent {

  searchQuery: string = '';
  hasErrror: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search( searchQuery: string)
  {
    this.searchQuery = searchQuery;

    if(searchQuery.trim().length > 0)
    {
      this.countryService.searchByCapital(this.searchQuery)
        .subscribe( (countries:Country[]) =>
        {
          this.countries = countries;
          this.hasErrror = false;
        },
        (error =>
        {
          this.hasErrror = true;
          this.countries = [];
        }));
    }
  }

  suggestions( value: string)
  {
    this.hasErrror = false;
    console.log('Sug: ' + value);
  }


}
