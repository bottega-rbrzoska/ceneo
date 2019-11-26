import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn$ = new Subject<boolean>();

  logIn() {
    this.isLoggedIn$.next(true);
  }

  logOut() {
    this.isLoggedIn$.next(false);
  }
}
