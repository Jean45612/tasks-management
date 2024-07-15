import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from './interfaces/auth.state';
import { _authReducer } from './reducers/auth.reducers';

export interface AppState {
  auth: AuthState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: _authReducer
};
