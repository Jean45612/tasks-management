import { createReducer, on } from '@ngrx/store';
import { LogIn, LogInFailure, LogInSuccess, Logout } from '../actions/auth.actions';
import { AuthState } from '../interfaces/auth.state';

export const initialState: AuthState = {
  userName: null,
  errorMessage: null,
  loading: false,
  isAuthenticated: false
};

export const _authReducer = createReducer(
  initialState,
  on(LogIn, (state) => ({
    ...state,
    loading: true,
    errorMessage: null,
  })),

  on(LogInSuccess, (state, { userName }) => ({
    ...state,
    userName,
    errorMessage: null,
    loading: false,
    isAuthenticated: true
  })),

  on(LogInFailure, (state, { error }) => ({
    ...state,
    errorMessage: error,
    loading: false,
  })),

  on(Logout, (state) => (
    {
      userName: null,
      errorMessage: null,
      loading: false,
      isAuthenticated: false
    }
  ))
);
