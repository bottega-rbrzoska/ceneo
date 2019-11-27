import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Subscription, Observable } from 'rxjs';
import { UserStore } from 'src/app/core/user.store';
import { UserState } from 'src/app/core/user.state';

@Component({
  selector: 'ce-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  isLoggedIn: boolean;
  name = 'Alojzy';
  userState$: Observable<UserState>;
  constructor(private authService: AuthService, private userStore: UserStore) {
   this.subscription =  authService.isLoggedIn$.subscribe( l => this.isLoggedIn = l );
   this.userState$ = this.userStore.state$;
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
