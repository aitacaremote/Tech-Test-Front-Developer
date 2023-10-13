import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { IUser } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData!: firebase.User;

  refreshToken: string;
  accessToken: string;

  constructor(
    public afAuth: AngularFireAuth,

    public afs: AngularFirestore,

    public ngZone: NgZone,

    public router: Router
  ) {}

  // Sign in with email/password

  async SignIn(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      
      this.userData = result.user;
      this.refreshToken = result.user.refreshToken;
      this.accessToken = await result.user.getIdToken();
  
      localStorage.setItem(
        'client',
        JSON.stringify({
          refreshToken: this.refreshToken,
          accessToken: this.accessToken,
          emailVerified: result.user.emailVerified,
        })
      );
  
      this.SetUserData(result.user);
 
    } catch (error) {
      window.alert(error.message);
      localStorage.setItem('client', 'null');
    }
  } 
  
  // Sign up with email/password

  SignUp(email: string, password: string) {
    return this.afAuth

      .createUserWithEmailAndPassword(email, password)

      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
  
          up and returns promise */

        this.SendVerificationMail();

        this.SetUserData(result.user);
      })

      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up

  SendVerificationMail() {
    return this.afAuth.currentUser.then((u) => u.sendEmailVerification());
  }

  // Reset Forggot password

  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth

      .sendPasswordResetEmail(passwordResetEmail)

      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })

      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in and email is verified

  get isLoggedIn(): boolean {
    console.log('isLoggedIn');

    const client = JSON.parse(localStorage.getItem('client')!);

    return client !== null && client.emailVerified !== false ? true : false;
  }

  // Auth logic to run auth providers

  AuthLogin(provider) {
    return this.afAuth

      .signInWithPopup(provider)

      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['ticket-list']);
        });

        this.SetUserData(result.user);
      })

      .catch((error) => {
        window.alert(error.message);
      });
  }

  /* Setting up user data when sign in with username/password,
  
    sign up with username/password and sign in with social auth  
  
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    const userData: IUser = {
      uid: user.uid,

      email: user.email,

      displayName: environment.appName,

      photoURL: user.photoURL,

      emailVerified: user.emailVerified,
    };

    return userRef.set(userData, {
      merge: true,
    });
  }

  getUserData() {
    return this.userData;
  }

  // Sign out

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('client');

      this.router.navigate(['login']);
    });
  }
}
