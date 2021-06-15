import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-per-country',
  templateUrl: './per-country.component.html',
  styles: [`li{cursor:pointer}`]
})
export class PerCountryComponent {


  searchQuery: string = '';
  hasErrror: boolean = false;
  countries: Country[] = [];
  countriesSuggestions:Country[] = [];
  showSuggestions: boolean =  false;

  constructor(private countryService: CountryService) { }

  search( searchQuery: string)
  {
    this.showSuggestions = false;
    this.searchQuery = searchQuery;
    if(searchQuery.trim().length > 0)
    {
      this.countryService.searchByCountry(this.searchQuery)
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
    this.showSuggestions = true;
    this.hasErrror = false;
    this.searchQuery = value;
    this.countryService.searchByCountry(value)
      .subscribe( countries => this.countriesSuggestions = countries.splice(0,5),
      (error) => this.countriesSuggestions = [])
  }

  searchSuggestion()
  {
    this.search(this.searchQuery);
  }

}
