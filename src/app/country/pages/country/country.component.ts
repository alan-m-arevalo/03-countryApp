import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent implements OnInit {


  country!: Country;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService) { }

  ngOnInit(): void
  {
    // this.activatedRoute.params
    // .subscribe( ({countryID})  =>{
    //   this.countryService.searchByCode(countryID)
    //   .subscribe( country => 
    //     {
    //       console.log(country);
    //     })
    // })

    this.activatedRoute.params
    .pipe(
      switchMap( ({countryID}) => this.countryService.searchByCode(countryID)),
      tap(console.log)
    )
    .subscribe( country =>
    {
      this.country = country;
    })
  }
}
