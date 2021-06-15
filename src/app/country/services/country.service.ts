import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _countries: any[] = [];
  //private _apiUrl: string = 'https://restcountries.eu/rest/v2/name/Mexio'
  private _apiUrl: string = 'https://restcountries.eu/rest/v2'

  constructor(private http: HttpClient) { }

  get countries(): any[]
  {
    return [...this._countries];
  }

  get httpParams(): HttpParams
  {
    return new HttpParams().
          set('fields','flag;name;capital;alpha2Code;population');
  }
  searchByCountry(country: string): Observable<Country[]>
  {
    const url: string = `${this._apiUrl}/name/${country}`;
    return this.http.get<Country[]>(url,{params:this.httpParams})
    /*.pipe(
      catchError(error => of([]))
    )*/
  }

  searchByCapital(capital: string): Observable<Country[]>
  {
    const url: string = `${this._apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url,{params:this.httpParams})
    /*.pipe(
      catchError(error => of([]))
    )*/
  }

  searchByCode(code: string): Observable<Country>
  {
    const url: string = `${this._apiUrl}/alpha/${code}`;
    return this.http.get<Country>(url)
  }

  searchByRegion(region: string): Observable<Country[]>
  {
    
    const url: string = `${this._apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url,{params:this.httpParams})
  }

}
