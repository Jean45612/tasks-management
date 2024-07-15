import { Injectable } from '@angular/core';
import { credentials } from './credentials';
import { LoginResponse, LoginRequest } from './auth.interface';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor() {}

  public login(requestData: LoginRequest): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      if (
        requestData.user === credentials.userName &&
        requestData.password === credentials.password
      ) {
        resolve({success: true, message: 'Credenciales correctas.', userName: requestData.user});
      } else {
        resolve({success: false, message: 'Credenciales incorrectas.', userName: requestData.user});
      }
    });
  }

  public isLoggedIn() {}

  public getUserName() {}

  public logout() {}
}
