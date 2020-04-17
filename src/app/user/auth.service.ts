import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable()
export class AuthService {
  currentUser: IUser

  loginUser(userName: string,
    password: string) {
    //fake implementation
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Upendra',
      lastName:'Gusain'
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
