import {Component, OnInit} from '@angular/core';
import {FirebaseService} from './services/firebase.service';
import {Observable} from 'rxjs';
import {Product} from './model/product.model';
import {DocumentChangeAction} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sportShop';
  items: DocumentChangeAction<unknown>[];
  // tslint:disable-next-line:variable-name
  age_filtered_items: Array<any>;
  // tslint:disable-next-line:variable-name
  name_filtered_items: Array<any>;

  constructor(public firebaseService: FirebaseService) {
  }

  getData(): Observable<Product[]> {
    this.firebaseService.getProducts().subscribe(product => {
      this.items = product;
    });
    return ;
  }
  ngOnInit() {
    this.getData();
  }

  viewDetails(item: any) {
  }
}
