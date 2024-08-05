import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  constructor() { }
  handler:any = null;
  ngOnInit() {

    this.loadStripe();
  }

  pay(amount: any) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51OqQvwSE77r96PcZXCqfyh3Kc7zdZofmvofTLBGAJYxUW2TTnFiZQpzmgdNO2uTtOD1EZWlbbMFMcQfIOr9bahzo00pHvAjefx',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Payment sucessfull!!');
      }
    });

    handler.open({
      name: 'Fee Payment',
      description: 'IT 4th year fee payment',
      amount: amount * 100
    });

  }

  loadStripe() {

    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51OqQvwSE77r96PcZXCqfyh3Kc7zdZofmvofTLBGAJYxUW2TTnFiZQpzmgdNO2uTtOD1EZWlbbMFMcQfIOr9bahzo00pHvAjefx',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }
}
