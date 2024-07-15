import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from './interfaces/auth.state';
import { _authReducer } from './reducers/auth.reducers';
import { TaskState } from './interfaces/task.state';
import { _taskReducer } from './reducers/task.reducers';

export interface AppState {
  auth: AuthState,
  task: TaskState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: _authReducer,
  task: _taskReducer
};
