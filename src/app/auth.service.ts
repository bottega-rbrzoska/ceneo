import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {

  }
  private isLoggedInSubj = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.isLoggedInSubj.asObservable();
  logIn() {
    this.isLoggedInSubj.next(true);
  }

  logOut() {
    this.isLoggedInSubj.next(false);
  }

  getUser() {
    return this.httpClient.get('/test-api/user')
  }
}
