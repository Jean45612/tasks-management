import { createAction, props } from "@ngrx/store";
import { LoginRequest } from "../../services/auth/auth.interface";

export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
    LOGOUT = '[Auth] Logout'
}

export const LogIn = createAction(
  AuthActionTypes.LOGIN,
  props<{ payload: LoginRequest }>()
)

export const LogInSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ userName: string }>()
)

export const LogInFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{ error: string }>()
)

export const Logout = createAction(
  AuthActionTypes.LOGOUT
)
