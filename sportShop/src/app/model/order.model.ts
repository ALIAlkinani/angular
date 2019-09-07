import {Injectable} from '@angular/core';
import {Cart} from './cart.module';

@Injectable()
export class OrderModel {
  public id: string;
  public name: string;
  public address: string;
  public city: string;
  public state: string;
  public zip: string;
  public country: string;
  public canceled: boolean;
  public shipped = false;

  constructor(public cart: Cart) {}

  clear() {
    this.id = null;
    this.name = this.address = this.city = null;
    this.state = this.zip = this.country = null;
    this.shipped = false;
    this.cart.clearLine();
  }


}
