import { Component } from '@angular/core';
import {OrderRepository} from '../model/order.repository';
import {OrderModel} from '../model/order.model';
@Component({
  templateUrl: 'orderTable.component.html'
})
export class OrderTableComponent {
  includedShipped = false;
  constructor( private repositry: OrderRepository) {}

  getOrders(): OrderModel[] {
    // ToDo return all the orders
   return  this.repositry.getOrders().filter(o => this.includedShipped || !o.shipped);
  }

  makeShipped(order: OrderModel) {
    // todo make the order shipped or ready to ship
    this.includedShipped = true;
    order.shipped = true ;
    console.log(order);
    this.repositry.updateOrder(order);
  }

  deleteOrder(id: number) {
    // todo delete order for cancellation
    this.repositry.deleteOrder(id);
  }

}
