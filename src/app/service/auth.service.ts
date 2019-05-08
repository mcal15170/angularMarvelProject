import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { CookieService } from 'ngx-cookie-service';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  loginFrom: string;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private cookie: CookieService
  ) {
    // Get the auth state, then fetch the Firestore user document or return null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        this.router.navigate(['comic']);
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          this.router.navigate(['login']);
          return of(null);
        }
      })
    )
  }

  async socialLogin(name: string) {
    console.log('current login : ' + name);
    let provider;
    if (name == 'google') {
      // google code
      this.loginFrom = 'google';
      provider = new auth.GoogleAuthProvider();
    }
    else if (name == 'facebook') {
      //facebook code
      this.loginFrom = 'facebook';
      provider = new auth.FacebookAuthProvider();
    }
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);

  }

  // async googleSignin() {
  //   const provider = new auth.GoogleAuthProvider();
  //   const credential = await this.afAuth.auth.signInWithPopup(provider);
  //   return this.updateUserData(credential.user);
  // }


  // async  facebookSignin() {
  //   const face_provider = new auth.FacebookAuthProvider();
  //   const face_credential = await this.afAuth.auth.signInWithPopup(face_provider);
  //   return this.updateUserData(face_credential.user);
  // }

  private updateUserData(user) {
    // Sets user data to firestore on login
    // console.log(user);
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      type: this.loginFrom
    }

    return userRef.set(data, { merge: true })

  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }


}
