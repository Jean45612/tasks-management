import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.states';
import { selectGetTasks } from '../../store/selectors/task.selectors';
import { AddTask, DeleteTask, UpdateTask } from '../../store/actions/task.action';
import { Task } from '../../store/interfaces/task.state';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private store: Store<AppState>) { }

  getTasks() {
    return this.store.select(selectGetTasks);
  }

  addTask(description: string) {
    this.store.dispatch(AddTask({payload: description}));
  }

  updateTask(task: Task) {
    this.store.dispatch(UpdateTask({task}));
  }

  deleteTask(id: number) {
    this.store.dispatch(DeleteTask({id}));
  }
}
