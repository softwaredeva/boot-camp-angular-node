import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged,tap, filter }from 'rxjs/operators';

import { Product } from './views/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  searchFormControl: FormControl = new FormControl();
  searchResults: Product[];
  isSearching: boolean;
  searchComplete: boolean;
  searchOpen: boolean = false;
  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.searchFormControl.valueChanges.pipe(
      filter(value=>!!value),
      debounceTime(300),
      distinctUntilChanged(),
      tap(()=>{this.isSearching = true;this.searchComplete = false;}),
    ).subscribe(value=>{
      console.log("searchFormControl value",value);
      // TODO: buscar en productos y filtrar resultados
      // this.searchResults = results;
      this.isSearching = false;
      this.searchComplete = true;
    });
  }

  searchBlur(){
    this.searchOpen = false;
    this.searchFormControl.setValue('');
    this.searchComplete = false;
    this.isSearching = false;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
