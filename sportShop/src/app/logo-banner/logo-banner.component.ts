import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component';
export interface DialogData {
  animal: string;
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

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
     this.dialog.open(LoginComponent);
  }


  ngOnInit() {

  }


}
