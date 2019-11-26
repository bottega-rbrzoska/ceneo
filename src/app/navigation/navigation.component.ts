import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ce-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  isLoggedIn: boolean;
  constructor(private authService: AuthService) {
   this.subscription =  authService.isLoggedIn$.subscribe( l => this.isLoggedIn = l );
  }

  ngOnInit() {
  }

  login() {
    this.authService.logIn();
  }

  logout() {
    this.authService.logOut();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
