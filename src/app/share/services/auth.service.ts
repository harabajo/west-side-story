import { Injectable } from '@angular/core';
import { Auth, signInWithPopup } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  provider = new GoogleAuthProvider();

  constructor(private auth: Auth, private firestore: Firestore, private router: Router) {
  }

  async loginUser() {
    try {
      const result = await signInWithPopup(this.auth, this.provider);

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      console.log(result);
      console.log(credential);
      console.log(token);
      console.log(user);


    } catch (err) {
      console.error(err);
    }
  }

}
