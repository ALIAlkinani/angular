import {Injectable} from '@angular/core';
import {OrderModel} from './order.model';
import {StaticDataSource} from './static.datasource';
import {Observable} from 'rxjs';
import {RestDataSource} from './rest.dataSource';

@Injectable()
export class OrderRepository {
  private orders: OrderModel [] = [];
  private loaded = false;

  constructor(private dataSource: RestDataSource) {}

  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders().subscribe(orders => this.orders = orders);
  }

  getOrders(): OrderModel[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }
  saveOrder(order: OrderModel): Observable<OrderModel> {
    return this.dataSource.saveOrder(order);
  }

  updateOrder(order: OrderModel) {
    this.dataSource.updateOrder(order).subscribe(
      O => {
        this.orders.splice(this.orders.findIndex(o => o.id === order.id), 1 , order);
      }
    );
  }

  deleteOrder(id: number) {
    this.dataSource.deleteOrder(id).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => id === o.id));
    });
  }
}
