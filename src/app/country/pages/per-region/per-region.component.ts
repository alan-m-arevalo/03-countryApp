import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-per-region',
  templateUrl: './per-region.component.html',
  styles: [
    `button
    {
      margin-right: 10px;
    }`
  ]
})
export class PerRegionComponent {


  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  activatedRegion: string = '';
  countries: Country[] = [];
  constructor(private countryService: CountryService) { }

  
  searchCountries(region:string)
  {
    

    if(region !== this.activatedRegion)
    {
      this.activatedRegion = region;
      this.countries = [];
      this.countryService.searchByRegion(region)
     .subscribe( countries => {
       this.countries = countries
      });
    }
    
  }

  getCssClass(region:string):string
  {
    return (region === this.activatedRegion)
            ? 'btn btn-primary'
            : 'btn btn-outline-primary';
  }
}
