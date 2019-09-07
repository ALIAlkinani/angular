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
  async state() {
    this.afAuth.auth.onAuthStateChanged(user => {

      if (user) {

        this.loggedIn = true;
        console.log('login', this.loggedIn);

      } else {
        this.loggedIn = false;
        console.log('login', this.loggedIn);
      }
    });
  }
}

