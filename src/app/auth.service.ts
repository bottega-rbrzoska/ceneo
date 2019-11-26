import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubj = new Subject<boolean>();

  isLoggedIn$ = this.isLoggedInSubj.asObservable();
  logIn() {
    this.isLoggedInSubj.next(true);
  }

  logOut() {
    this.isLoggedInSubj.next(false);
  }
}
