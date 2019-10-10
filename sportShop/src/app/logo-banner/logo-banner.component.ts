import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';
import {loggedIn} from '@angular/fire/auth-guard';
import {Cart} from '../model/cart.module';
export interface DialogData {
 username: string;
  name: string;
}
@Component({
  selector: 'app-logo-banner',
  templateUrl: './logo-banner.component.html',
  styleUrls: ['./logo-banner.component.css']
})
export class LogoBannerComponent implements OnInit {

  password: string;
  name: string;
  private loggedIn: boolean;

  constructor(public dialog: MatDialog, private auth: AuthService, private router: Router, public cart: Cart) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (this.auth.loggedIn) {
        this.loggedIn = true;
      }
    });
  }


  ngOnInit() {
    this.auth.state();

  }


  logout() {
    this.auth.logout().then(auth => {
      this.auth.loggedIn = false;
    });
  }
  checkOut() {
    this.router.navigateByUrl('/Cart');
  }
}
