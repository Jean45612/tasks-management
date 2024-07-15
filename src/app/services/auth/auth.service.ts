import { Injectable } from '@angular/core';
import { credentials } from './credentials';
import { LoginResponse, LoginRequest } from './auth.interface';
import { AppState } from '../../store/app.states';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthenticated, selectUserName } from '../../store/selectors/auth.selectors';
import { Logout } from '../../store/actions/auth.actions';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private store: Store<AppState>) {}

  public login(requestData: LoginRequest): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      if (
        requestData.userName === credentials.userName &&
        requestData.password === credentials.password
      ) {
        resolve({success: true, message: 'Credenciales correctas.', userName: requestData.userName});
      } else {
        resolve({success: false, message: 'Credenciales incorrectas.', userName: requestData.userName});
      }
    });
  }

  public isLoggedIn(): Observable<boolean>{
    return this.store.select(selectAuthenticated);
  }

  public getUserName() {
    return this.store.select(selectUserName);
  }

  public logout() {
    this.store.dispatch(Logout());
  }
}
