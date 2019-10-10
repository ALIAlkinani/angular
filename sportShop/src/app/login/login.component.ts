import {Component, Inject, OnInit} from '@angular/core';
import {DialogData} from '../logo-banner/logo-banner.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';
import {auth} from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName: string;
  public password: string;
  public smallRegex = new RegExp('[a-z]');
  public capitalRegex = new RegExp('[A-Z]');
  public numbersRegex = new RegExp('[0-9]');
  public errorMessage: string[];
  register: boolean;
  login: boolean;

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth1.login(this.userName, this.password).then( user => {
        if (user) {
          if (user.emailVerified) {
            this.dialogRef.close();
            this.router.navigateByUrl('/admin/main');
          } else {
            this.errorMessage.push('Please confirm you email first ');
          }
        }
      });

    } else {
      this.errorMessage.push('Form Data Invalid');
    }
  }
  constructor( private router: Router, private auth1: AuthService,
               public dialogRef: MatDialogRef<LoginComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.login = true;
    this.register = false;
    this.errorMessage = [];
  }

  checkPassword(password: string): void {
    this.errorMessage = [];
    console.log(password, this.userName);
    if (password === this.userName) {
      this.errorMessage.push( 'Password cannot be the user name.');
      return;
    }
    if (!this.smallRegex.test(password)) {
      this.errorMessage.push( 'Password must contain at less one small letter' );
      return;
    }
    if (!this.capitalRegex.test(password)) {
      this.errorMessage.push( 'Password must contain at less one capital letter. ');
      return;
    }
    if (!this.numbersRegex.test(password)) {
      this.errorMessage.push( 'Password must contain at less one numbers ');
    }
    console.log(this.errorMessage);
  }
  openRegister(): void {
    this.login = false;
    this.register = true;
  }

  createUser(form: NgForm) {
    if (form.valid) {
      this.auth1.register(this.userName, this.password).then( user => {

        if (user != null) {
          this.dialogRef.close();
        } else {
          this.errorMessage.push( 'Authentication failed');
        }
      });

    } else {
      this.errorMessage.push('Form Data Invalid');
    }
  }

  async google_login() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.auth1.afAuth.auth.signInWithPopup(provider);
    if (credential.user) {
      this.dialogRef.close();
      this.auth1.loggedIn = true;
    }

    return console.log(credential.user);
  }

  async facebook_login() {
    const provider = new auth.FacebookAuthProvider();
    // @ts-ignore
    const credential = await this.auth1.afAuth.auth.signInWithPopup(provider).catch( error => {
      // An error happened.
      if (error.code === 'auth/account-exists-with-different-credential') {
        const email = error.email;
        // Get sign-in methods for this email.
        // @ts-ignore
        this.auth1.afAuth.auth.fetchSignInMethodsForEmail(email).then( methods =>  {
          // Step 3.
          // If the user has several sign-in methods,
          // the first method in the list will be the "recommended" method to use.
          console.log(methods[0]);
          if (methods[0] === 'google.com') {
            const provider2 = new auth.GoogleAuthProvider();
            this.auth1.afAuth.auth.signInWithRedirect(provider2).then(user => {
              console.log(user);
              this.auth1.loggedIn = true;
            });
          }});
      }
      if (credential.user) {
      this.dialogRef.close();
      this.auth1.loggedIn = true;
    }
      return console.log(credential.user);

  });
  }

  async twitter_login() {
    const provider = new auth.TwitterAuthProvider();
    const credential = await this.auth1.afAuth.auth.signInWithPopup(provider);
    if (credential.user) {
      this.dialogRef.close();
      this.auth1.loggedIn = true;
    }

    return console.log(credential.user);

  }

}
