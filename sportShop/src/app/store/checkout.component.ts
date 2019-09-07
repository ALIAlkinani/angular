import {Component} from '@angular/core';
import {OrderModel} from '../model/order.model';
import {OrderRepository} from '../model/order.repository';
import {NgForm} from '@angular/forms';

@Component({
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css']
})
export class CheckoutComponent {
  submitted = false;
  orderSent = false;

  constructor(public order: OrderModel, public repositry: OrderRepository) { }

  submitOrder(form: NgForm) {
  this.submitted = true;
  if (form.valid) {
    this.repositry.saveOrder(this.order).order.then(order => {
      this.order.clear();
      this.orderSent = true;
      this.submitted = false;
    });
  }
  }

}
