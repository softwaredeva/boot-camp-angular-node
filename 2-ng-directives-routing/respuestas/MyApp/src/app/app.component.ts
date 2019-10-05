import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged,tap, filter }from 'rxjs/operators';

import { Product } from './interfaces//Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  searchFormControl: FormControl = new FormControl();
  searchResults: Product[];
  isSearching: boolean;
  searchComplete: boolean;
  searchOpen = false;
  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  searchBlur() {
    this.searchOpen = false;
    this.searchFormControl.setValue('');
    this.searchComplete = false;
    this.isSearching = false;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
