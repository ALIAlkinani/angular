import {Component} from '@angular/core';
import {ProductRepository} from '../model/product.repository';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../model/product.model';
import {NgForm} from '@angular/forms';


@Component({
  templateUrl: 'productEditor.component.html'
})
export class ProductEditorComponent {
  editing = false;
  product: Product = new Product();
 constructor(private repositry: ProductRepository, private router: Router, activatedRoute: ActivatedRoute) {


   this.editing = activatedRoute.snapshot.params.mode === 'edit';
   if (this.editing) {
     Object.assign(this.product ,  repositry.getProduct(activatedRoute.snapshot.params.id));
   }
 }
  save(form: NgForm) {
   console.log('product', this.product);
   this.repositry.saveProduct(this.product);
   this.router.navigateByUrl('/admin/main/products');

  }

}

