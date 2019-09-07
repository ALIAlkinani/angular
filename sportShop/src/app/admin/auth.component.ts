import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth/auth.service';
import {loggedIn} from '@angular/fire/auth-guard';
import {User} from 'firebase';






@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit  {
  public username: string;
  public password: string;
  public errorMessage: string;
  private user: User;
  constructor(private router: Router, private auth: AuthService) {

  }

  authenticate(form: NgForm) {
    if (form.valid) {
     this.auth.login(this.username, this.password).then( user => {

       if (user != null) {
         this.router.navigateByUrl('/admin/main');
       } else {
         this.errorMessage = 'Authentication failed';
       }
     });

    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }
  ngOnInit() {

    this.auth.state().then( lo => {
      console.log(this.auth.loggedIn);
      if (this.auth.loggedIn) {
      this.router.navigateByUrl('/admin/main');
    }
    });
  }

}
