import { Injectable } from '@angular/core';
import { setPersistence } from '@firebase/auth'
import { Auth, signInWithPopup, GoogleAuthProvider, browserLocalPersistence } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  provider = new GoogleAuthProvider();

  constructor(
    private auth: Auth,
  ) { }

  async loginUser() {
    try {
      await setPersistence(this.auth, browserLocalPersistence)
      await signInWithPopup(this.auth, this.provider);


      // this.userService.setCurrentUser(result.user)
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential?.accessToken;


    } catch (err) {
      console.error(err);
    }
  }


  signOutUser() {
    try {
      this.auth.signOut()
    } catch (err) {
      console.error(err);
    }
  }

}
