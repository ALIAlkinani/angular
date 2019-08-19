import {Component} from '@angular/core';
import {ProductRepository} from '../model/product.repository';
import {Product} from '../model/product.model';

@Component({
  templateUrl: 'productTable.component.html'
})
export class ProductTableComponent {
  constructor(private repositry: ProductRepository) {}
  getProducts(): Product[] {
    return this.repositry.getProducts();
  }

  deleteProduct(id: number) {
    this.repositry.deleteProduct(id);
  }
}
