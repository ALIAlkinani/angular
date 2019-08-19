import {NgModule} from '@angular/core';
import {ProductRepository} from './product.repository';
import {StaticDataSource} from './static.datasource';
import {Cart} from './cart.model';
import {OrderModel} from './order.model';
import {OrderRepository} from './order.repository';
import {RestDataSource} from './rest.dataSource';
import { HttpClientModule } from '@angular/common/http';
import {AuthService} from './auth.service';
import {ConnectionService} from './connection.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, StaticDataSource, Cart, OrderModel, OrderRepository,
    { provide: StaticDataSource, useClass: RestDataSource } , RestDataSource, AuthService, ConnectionService]
})

export class ModelModule {
}

