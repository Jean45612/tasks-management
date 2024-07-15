import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AddTask, DeleteTask, GetTasks, UpdateTask } from '../actions/task.action';

@Injectable()
export class AuthEffects {
  constructor(private actions: Actions) {}

  GetTasks = createEffect(() => this.actions.pipe(ofType(GetTasks)), {
    dispatch: false,
  });

  AddTask = createEffect(() => this.actions.pipe(ofType(AddTask)), {
    dispatch: false,
  });

  UpdateTask = createEffect(() => this.actions.pipe(ofType(UpdateTask)), {
    dispatch: false,
  });

  DeleteTask = createEffect(() => this.actions.pipe(ofType(DeleteTask)), {
    dispatch: false,
  });
}
