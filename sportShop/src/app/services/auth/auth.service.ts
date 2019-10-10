import {Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  user: User = null;
  public loggedIn: boolean;

  constructor(public  afAuth: AngularFireAuth)  {
  }

  async login(email: string, password: string) {
    try {
      await  this.afAuth.auth.signInWithEmailAndPassword(email, password).then(cred => {
        this.user = cred.user;
        if (!this.user.emailVerified) {
          window.alert('Please validate your email address. Kindly check your inbox.');
          this.logout();
        }
      });

    } catch (e) {
      alert('Error!' + e.message);
    }
    return this.user;
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification();
  }
  async register(email: string, password: string) {
    try {
      await  this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(cred => {
        this.user = cred.user;
        this.afAuth.auth.currentUser.sendEmailVerification();
        window.alert('Please validate your email address. Kindly check your inbox.');
      });

    } catch (e) {
      alert('Error!' + e.message);
    }
    return this.user;
  }

  async state() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        if (user.emailVerified) {

          this.loggedIn = true;
          console.log('login10', this.loggedIn);

        } else {
          this.loggedIn = false;
          console.log('login', this.loggedIn);
        }
      }
    });
  }

}

