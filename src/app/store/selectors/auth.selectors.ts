import { createSelector } from '@ngrx/store';
import { AppState } from '../app.states';

export const selectAuthState = (state: AppState) => state.auth;

export const selectLoading = createSelector(
  selectAuthState,
  (state) => state.loading
);

export const selectUserName = createSelector(
  selectAuthState,
  (state) => state.userName
);

export const selectError = createSelector(
  selectAuthState,
  (state) => state.errorMessage
);
