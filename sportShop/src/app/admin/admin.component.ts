import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';
@Component({
  templateUrl: 'admin.component.html'
})
export class AdminComponent {
  constructor(private auth: AuthService, private router: Router) {}
  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }
}
