import {FormsModule} from '@angular/forms';
import {StoreComponent} from './store/store.component';
import {ModelModule} from './model/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [StoreComponent],
  exports: [StoreComponent]

})
export class StoreModule {
}
