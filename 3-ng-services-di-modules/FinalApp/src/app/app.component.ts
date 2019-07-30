import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged, switchMap,tap, filter }from 'rxjs/operators';

import { CheckoutService, CheckoutProduct } from './services/checkout.service';
import { ProductsService, Product } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  checkoutProducts: CheckoutProduct[];

  searchFormControl: FormControl = new FormControl();
  searchResults: Product[];
  isSearching: boolean;
  searchComplete: boolean;
  searchOpen: boolean = false;
  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private checkoutService: CheckoutService,
    private productsService: ProductsService,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.checkoutService.productsObservable.subscribe((checkoutProducts:CheckoutProduct[])=>{
      console.log("productsObservable",checkoutProducts);
      if(checkoutProducts)
      this.checkoutProducts = checkoutProducts;
    });
    this.searchFormControl.valueChanges.pipe(
      filter(value=>!!value),
      debounceTime(300),
      distinctUntilChanged(),
      tap(()=>{this.isSearching = true;this.searchComplete = false;}),
      switchMap(value=>this.productsService.searchProducts(value)),
    ).subscribe(results=>{
      this.searchResults = results;
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

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
