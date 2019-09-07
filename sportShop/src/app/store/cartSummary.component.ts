import {Component} from '@angular/core';
import {Cart} from '../model/cart.module';

@Component({
  selector: 'app-cart-summary',
  templateUrl: 'cartSummary.component.html'
})
export class CartSummaryComponent {
  constructor(public cart: Cart) {}
}
