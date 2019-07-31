import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCartProductsComponent } from './checkout-cart-products.component';

describe('CheckoutCartProductsComponent', () => {
  let component: CheckoutCartProductsComponent;
  let fixture: ComponentFixture<CheckoutCartProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutCartProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCartProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
