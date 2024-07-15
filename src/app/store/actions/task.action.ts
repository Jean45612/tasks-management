import { createAction, props } from '@ngrx/store';
import { Task } from '../interfaces/task.state';

export enum AuthActionTypes {
  GET_TASKS = '[Task] Get Task',
  ADD_TASK = '[Task] Add Task',
  UPDATE_TASK = '[Task] Update Task',
  DELETE_TASK = '[Task] Delete Task',
}

export const GetTasks = createAction(AuthActionTypes.GET_TASKS);

export const AddTask = createAction(
  AuthActionTypes.ADD_TASK,
  props<{ payload: string }>()
);

export const UpdateTask = createAction(
  AuthActionTypes.UPDATE_TASK,
  props<{ task: Task }>()
);

export const DeleteTask = createAction(
  AuthActionTypes.DELETE_TASK,
  props<{ id: number }>()
);
