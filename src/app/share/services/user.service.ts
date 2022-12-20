import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auth, User } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private auth: Auth,
  ) { }

  private _currentUser = new BehaviorSubject<User | null>(null)
  public $currentUser = this._currentUser.asObservable()

  setCurrentUser(user: User): void {
    this._currentUser.next(user);
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}
