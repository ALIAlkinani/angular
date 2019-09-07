import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Product} from '../model/product.model';
import {OrderModel} from '../model/order.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getAvatars() {
      return this.db.collection('/avatar').valueChanges();
  }

  getUser(productId) {
    return this.db.collection('/ products').doc(productId).snapshotChanges();
  }

  updateProduct(productId, product: Product) {
    return this.db.collection('/ products').doc(productId).set(Object.assign({}, product));
  }

  deleteProduct(productId) {
    return this.db.collection('/ products').doc(productId).delete();
  }

  getProducts() {
   return  this.db.collection('/ products').snapshotChanges();
  }

  searchUsers(searchValue) {
    return this.db.collection('/ products', ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges();
  }

  searchUsersByAge(value) {
    return this.db.collection('/ products', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createProduct(product: Product) {
    const newId = this.db.createId();
    return this.db.collection('/ products').doc(newId).set( {
      id: newId,
      name: product.name,
      category: product.category,
      price: product.price,
      // tslint:disable-next-line:radix
      description: product.description,
    });
  }


  createOrder(order: OrderModel) {
    const newId = this.db.createId();
    return {
      order: this.db.collection('orders').doc(newId).set({
        id: newId,
        name: order.name,
        city: order.city,
        state: order.state,
        zip: order.zip,
        address: order.address,
        country: order.country,
        shipped: order.shipped,
        canceled: false,
      }), cart: order.cart.lines.forEach(o => this.db.collection(`orders/${newId}/cart`).add({
        product: o.product,
        quantity: o.quantity,
        totalPrice: o.lineTotal
      }) )
    };
  }
  getOrders() {
    return  this.db.collection('/orders').snapshotChanges();
  }



  getCarts(orderid: string) {
    return this.db.collection('/orders').doc(orderid).collection('/cart').get();
  }

  updateOrder(order: OrderModel) {
    return this.db.collection('/orders').doc(order.id).set(Object.assign({}, order));
  }

  deleteOrder(order: OrderModel) {
    order.canceled = true;
    return this.db.collection('/orders').doc(order.id).set(Object.assign({}, order));
  }
}
