import {Injectable} from '@angular/core';
import {OrderModel} from './order.model';
import {Observable} from 'rxjs';
import {RestDataSource} from './rest.dataSource';
import {FirebaseService} from '../services/firebase.service';
import {DocumentChangeAction} from '@angular/fire/firestore';
import {AddressModule} from './address.module';

@Injectable()
export class OrderRepository {
  private ordersid: string[] = [];
  private address: AddressModule[]  = [];
  private orders: OrderModel[] = [];
  private loaded = false;

  constructor(private firebase: FirebaseService , private dataSource: RestDataSource) {
    this.firebase.getOrders().subscribe(orders => {
      this.address = orders.map(o => o.payload.doc.data());
      console.log('address', this.address);
    });
  }

  loadOrders() {
    this.loaded = true;
    // @ts-ignore
    return this.address;
  }

  getOrders(): AddressModule[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.address;
  }
  saveOrder(order: OrderModel) {
    return this.firebase.createOrder(order);
  }

  updateOrder(order: OrderModel) {
    this.firebase.updateOrder(order).then(
      O => {
        // @ts-ignore
        this.orders.splice(this.orders.findIndex(o => o.id === order.id), 1 , order);
      }
    );
  }

  deleteOrder(order: OrderModel) {
    this.firebase.deleteOrder(order).then(o => {
      // @ts-ignore
      // tslint:disable-next-line:no-shadowed-variable
      this.orders.splice(this.orders.findIndex(o => o.id === order.id), 1 , order);
    });
  }
}
