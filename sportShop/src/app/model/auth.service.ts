import {Injectable} from '@angular/core';
import {RestDataSource} from './rest.dataSource';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private datasource: RestDataSource) {}

  authenicate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }

  get authenicated(): boolean {
    return this.datasource.authToken !== null ;
  }

  clear() {
    return this.datasource.authToken = null;
  }

}
