import { createReducer, on } from '@ngrx/store';
import { TaskState } from '../interfaces/task.state';
import { AddTask, DeleteTask, GetTasks, UpdateTask } from '../actions/task.action';

export const initialState: TaskState = {
  tasks: [],
};

export const _taskReducer = createReducer(
  initialState,
  on(GetTasks, (state) => ({
    ...state,
  })),

  on(AddTask, (state, { payload }) => ({
    ...state,
    tasks: [...state.tasks, { id: state.tasks.length, description: payload, checked: false }],
  })),

  on(UpdateTask, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t => (t.id === task.id ? task : t))
  })),

  on(DeleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  }))
);
