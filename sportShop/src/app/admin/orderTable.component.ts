import { Component } from '@angular/core';
import {OrderRepository} from '../model/order.repository';
import {OrderModel} from '../model/order.model';
import {AddressModule} from '../model/address.module';
import {CartRepository} from './cart.repository';
import {CartdbModule} from '../model/cartdb.module';

import {OrdersModule} from '../model/orders.module';




@Component({
  templateUrl: 'orderTable.component.html'
})
export class OrderTableComponent {
  constructor( private repositry: OrderRepository, private cartRepository: CartRepository) {}
  includedShipped = false;
  showCanceled = false;
  private orders: AddressModule[] = [];
  private cart: CartdbModule[] = [];
  private  totalorders: OrdersModule[] = [] ;
  private i: number;


  getOrders() {
    // ToDo return all the orders
   this.orders =  this.repositry.getOrders().filter(o =>
     this.showCanceled && o.canceled || this.includedShipped && !o.canceled || !o.shipped && !o.canceled);
   console.log('shipped', this.includedShipped);
   console.log('canceled', this.showCanceled);
   console.log('productCanceled', this.orders);
   return this.orders;
  }



makeShipped(order: OrderModel) {
    // todo make the order shipped or ready to ship
    this.includedShipped = true;
    order.shipped = true ;
    this.repositry.updateOrder(order);
  }

deleteOrder(o: OrderModel) {
    // todo delete order for cancellation
    this.repositry.deleteOrder(o);
  }
  getorderDetails(o: AddressModule) {
    this.cartRepository.getCarts(o.id).subscribe(data =>  {

      o.cart =   data.docs.map( doc => doc.data());

      console.log(o.cart);
    });
  }

}
