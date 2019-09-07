import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {FirebaseService} from '../services/firebase.service';



@Injectable()
export class ProductRepository {
  private products: Product[]  = [];
  private categories: string[] = [];




  constructor( public firebaseService: FirebaseService) {
    this.firebaseService.getProducts().subscribe(product => {
      this.products = product.map(doc => doc.payload.doc.data());
      console.log('p', this.products);
      // @ts-ignore
      this.categories = product.map(p => p.payload.doc.data().category).filter((c, index, array) => array.indexOf(c) === index).sort();
    });
    /*dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category).filter((c, index, array) => array.indexOf(c) === index).sort();
    });*/
  }

  getProducts(category: string = null): Product[] {
    return this.products
      .filter(p => category == null || category === p.category);
  }
  getProduct(id: string ): Product {

    // tslint:disable-next-line:triple-equals
    return this.products.find(p => p.id == id);
  }
  getCategories(): string[] {
    return this.categories;
  }

  saveProduct(product: Product) {
    if (product.id == null ) {
      this.firebaseService.createProduct(product);
    } else {
      this.firebaseService.updateProduct(String(product.id), product)
        .then(p => {
          // tslint:disable-next-line:no-shadowed-variable
          this.products.splice(this.products.findIndex(p => p.id === product.id), 1 , product);
        });
    }
  }

  deleteProduct(id: string) {
    this.firebaseService.deleteProduct(id);
  }
}
