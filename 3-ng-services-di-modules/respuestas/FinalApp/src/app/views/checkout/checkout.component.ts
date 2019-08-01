import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CheckoutService, CheckoutProduct } from '../../services/checkout.service';

export const MONTHS = [
  {value:'01',label:'Enero'},
  {value:'02',label:'Febrero'},
  {value:'03',label:'Marzo'},
  {value:'04',label:'Abril'},
  {value:'05',label:'Mayo'},
  {value:'06',label:'Junio'},
  {value:'07',label:'Julio'},
  {value:'08',label:'Agosto'},
  {value:'09',label:'Septiembre'},
  {value:'10',label:'Octubre'},
  {value:'11',label:'Noviembre'},
  {value:'12',label:'Diciembre'},
];

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const CVV_REGEX = /^[0-9][0-9][0-9]$/;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  months = MONTHS;
  years = [];

  _products: CheckoutProduct[];
  set products(value: CheckoutProduct[]){
    this._products = value;
    this.calculateTotal();
  }; get products(): CheckoutProduct[]{return this._products;};
  subTotal: number = 0;
  deliveryCost: number = 150;
  totalCost: number = 0;
  checkoutForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]*$/)]),
    email: new FormControl('',[Validators.required,Validators.pattern(EMAIL_REGEX)]),
    address: new FormControl('',[Validators.required, Validators.maxLength(128)]),
    card: new FormControl('',[Validators.required,Validators.pattern(/^\d+$/)]),
    expirationMonth: new FormControl('',[Validators.required]),
    expirationYear: new FormControl('',[Validators.required]),
    csv: new FormControl('',[Validators.required, Validators.pattern(CVV_REGEX)]),
  });
  constructor(
    private checkoutService: CheckoutService,
    private router: Router,
  ) {
    let actualYear = (new Date()).getFullYear();
    for(let i = 0; i<20; i++)
    this.years.push({value:`${actualYear+i}`,label:`${actualYear+i}`});
  }

  ngOnInit() {
    this.products = this.checkoutService.products;
    if(!this.products.length)
    this.router.navigate(['/']);
  }

  calculateTotal(){
    if(this.products)
    this.subTotal = this.products.map(prod=>prod.cost*prod.quantity)
    .reduce((preVal, currVal)=>{
      return preVal+currVal;
    },0)
    this.totalCost = this.subTotal+this.deliveryCost;
  }

  sendCheckout(){
    this.checkoutService.sendNewCheckout({
      customerData: this.checkoutForm.value,
      checkoutProducts: this.products
    }).subscribe(success=>{
      console.log("success",success);
    });
  }

}
