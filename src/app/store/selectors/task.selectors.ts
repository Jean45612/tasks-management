import { createSelector } from '@ngrx/store';
import { AppState } from '../app.states';

export const selectTasksState = (state: AppState) => state.task;

export const selectGetTasks = createSelector(
  selectTasksState,
  (state) => state.tasks
);
