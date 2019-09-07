import {Injectable} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';


import {Subscription} from 'rxjs';

@Injectable()
export class CartRepository {

  constructor(private firebase: FirebaseService) {  }

  getCarts(orderid: string) {
    return this.firebase.getCarts(orderid);
  }
}
