/* The SportsStore application isn’t an ideal candidate for progressive features because connectivity is required
to place an order. To avoid user confusion when the application is running without connectivity, I am going
to disable the checkout process. The APIs that are used to add progressive features provide information
about the state of connectivity and send events when the application goes offline and online. To provide the
application with details of its connectivity */



import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class ConnectionService {
  private connEvent: Subject<boolean>;
  constructor() {
    this.connEvent = new Subject<boolean>();
    window.addEventListener('online', (e) => this.handelConnectionChange(e));
    window.addEventListener('offline', (e) => this.handelConnectionChange(e));
  }

  private handelConnectionChange(e: Event) {
    this.connEvent.next(this.connected);
  }

  get connected(): boolean {
    return window.navigator.onLine;
  }

  get changes(): Observable<boolean> {
    return this.connEvent;
  }
}
