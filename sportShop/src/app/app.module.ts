import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {StoreModule} from './store/store.module';
import {RouterModule} from '@angular/router';
import {StoreComponent} from './store/store.component';
import {CartDetailComponent} from './store/cartDetail.component';
import {CheckoutComponent} from './store/checkout.component';
import {StoreFirstGuard} from './storeFirst.guard';
import {FormsModule} from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {FirebaseService} from './services/firebase.service';
import {AuthService} from './services/auth/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: 'Store', component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: 'Cart', component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: 'Checkout', component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        /*The new route tells Angular that when the application navigates to the /admin URL, it should load a
feature module defined by a class called AdminModule from the admin/admin.module.ts file, whose path is
specified relative to the app.module.ts file. When Angular processes the admin module, it will incorporate
the routing information it contains into the overall set of routes and complete the navigation */
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [StoreFirstGuard]
      },
      {path: '**', redirectTo: '/Store'}
    ]),
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [FirebaseService, StoreFirstGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
