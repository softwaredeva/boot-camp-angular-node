import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  months = MONTHS;
  years = [];

  products: CheckoutProduct[];
  subTotal: number = 0;
  deliveryCost: number = 0;
  totalCost: number = 0;
  checkoutForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    card: new FormControl('',[Validators.required]),
    expiration: new FormControl('',[Validators.required]),
    csv: new FormControl('',[Validators.required]),
  });
  constructor(
    private checkoutService: CheckoutService,
  ) {
    let actualYear = (new Date()).getFullYear();
    for(let i = 0; i<20; i++)
    this.years.push({value:`${actualYear+i}`,label:`${actualYear+i}`});
  }

  ngOnInit() {
    this.checkoutService.productsObservable.subscribe((checkoutProducts:CheckoutProduct[])=>{
      console.log("productsObservable",checkoutProducts);
      if(checkoutProducts)
      this.products = checkoutProducts;
    });
  }

}
