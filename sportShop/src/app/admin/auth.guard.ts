/* To prevent the application from navigating directly to the administration features, which will lead to
HTTP requests being sent without a token, */
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../model/auth.service';

@Injectable()
export class AuthGuard {

  constructor(private router: Router, private auth: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.auth.authenicated) {
      this.router.navigateByUrl('admin/auth');
      return false;
    }
    return true;

  }
}
