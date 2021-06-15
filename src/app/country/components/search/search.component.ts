import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from "rxjs";
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit
{

  @Input() placeHolder: string = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  @Output() onDebounde: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject<string>();

  searchQuery: string = '';
  
  constructor() { }


  ngOnInit(): void
  {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( value =>
      {
        this.onDebounde.emit(value);
      })
  }

  search()
  {
    this.onSearch.emit(this.searchQuery);
  }

  keyPress()
  {
    this.debouncer.next(this.searchQuery)
  }

  

}
