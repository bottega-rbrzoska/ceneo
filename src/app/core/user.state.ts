import { User } from '../models/user.interface';

export class UserState {
  isLoggedIn: boolean;
  userData: User;
}
