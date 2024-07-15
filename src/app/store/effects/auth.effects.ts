import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  LogIn,
  LogInSuccess,
  LogInFailure,
  LogOut,
  LogOutSuccess,
} from '../actions/auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';
import { LoginRequest, LoginResponse } from '../../services/auth/auth.interface';

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  LogIn$ = createEffect(() => this.actions.pipe(
    ofType(LogIn),
    map((action) => action.payload),
    switchMap((payload: LoginRequest) => {
      return this.authService.login(payload).then(
        (response: LoginResponse) => {
          if (response.success) {
            return LogInSuccess({
              userName: response.userName,
            });
          }

          return LogInFailure({ error: response.message });
        },
        (error: any) => {
          return LogInFailure({
            error: 'Hubo un problema, por favor intentelo más tarde.',
          });
        }
      );
    })
  ));

  LogInSuccess$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(LogInSuccess),
        tap((user) => {
          this.router.navigate(['/tasks']);
        })
      ),
    { dispatch: false }
  );

  LogInFailure$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(LogInFailure)
      ),
    { dispatch: false }
  );

  LogOut$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(LogOut),
        map(() => LogOutSuccess()) )
  );

  LogOutSuccess$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(LogOutSuccess),
        tap(() => {
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );
}
