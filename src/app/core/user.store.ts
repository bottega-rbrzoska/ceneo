import { Injectable } from "@angular/core";
import { UserState } from './user.state';
import { Store } from '../store';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class UserStore extends Store<UserState> {
  userNameState$ = this.state$.pipe(
    map(state => state.userData ? state.userData.name : null),
    distinctUntilChanged()
  )
  constructor() {
    super({
      isLoggedIn: false,
      userData:  null
    });
  }

  logIn() {
    this.setState({
      ...this.state,
      isLoggedIn: true
    })
    }

    logOut() {
      this.setState({
        ...this.state,
        isLoggedIn: false
      })
      }
    setNewName(name: string) {
      const modifiedUser = this.state.userData ?
      { ...this.state.userData, name } : { email: '', name };
      this.setState({
        ...this.state,
        userData: modifiedUser
      });
    }
}
