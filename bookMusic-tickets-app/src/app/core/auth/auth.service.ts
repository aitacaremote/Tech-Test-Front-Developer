import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';
import { filter, from, switchMap } from 'rxjs';
import { IUser } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData!: any;

  refreshToken: string;
  accessToken: string;

  constructor(
    public afAuth: AngularFireAuth,

    public afs: AngularFirestore,

    public ngZone: NgZone,

    public router: Router,

    private toastr: ToastrService,
  ) {}

  // Sign in with email/password

  async SignIn(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      this.refreshToken = result.user.refreshToken;
      this.accessToken = await result.user.getIdToken();

      if (!result.user.emailVerified) {
        this.toastr.error('Please verify your email');
      } else {
        localStorage.setItem(
          'client',
          JSON.stringify({
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            emailVerified: result.user.emailVerified,
          })
        );
        this.router.navigate(['/p/events']);
      }
    } catch (error) {
      window.alert(error.message);
      localStorage.setItem('client', 'null');
    }
  }

  // Sign up with email/password

  async SignUp(email: string, password: string, displayName: string) {
    return this.afAuth

      .createUserWithEmailAndPassword(email, password)

      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
  
          up and returns promise */

        this.SendVerificationMail();

        let createdUser = {
          uid: result.user.uid,
          email: result.user.email,
          displayName,
          photoURL: result.user.photoURL,
          emailVerified: result.user.emailVerified,
        };
        this.SetUserData(createdUser);
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

  get currentUser$() {
    return this.afAuth.authState.pipe(
      filter((userAuth) => !!userAuth),
      switchMap((userAuth) =>
        this.afs.doc<IUser>(`users/${userAuth.uid}`).valueChanges()
      )
    );
  }

  // Returns true when user is looged in and email is verified

  get isLoggedIn(): boolean {
    const client = localStorage.getItem('client') as any;

    return client !== null && client.emailVerified !== false ? true : false;
  }

  /* Setting up user data when sign in with username/password,
  
    sign up with username/password and sign in with social auth  
  
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    const userData = {
      uid: user.uid,

      email: user.email,

      displayName: user.displayName,

      photoURL: user.photoURL,

      emailVerified: user.emailVerified,
    };

    this.userData = userData;

    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign out

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('client');
      this.router.navigate(['/login']);
    });
  }
}
