import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { alphanumericValidator } from '../../utils/forms/validators/alphanumeric.validator';
import { TaskService } from '../../services/task/task.service';
import { Observable } from 'rxjs';
import { Task } from '../../store/interfaces/task.state';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  taskForm: FormGroup = this.formBuilder.group({
    task: ['', [Validators.required, alphanumericValidator()]],
  });

  tasks: Task[] | [] = [];

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  identify(index: number, task: Task) {
    return task.id;
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => (this.tasks = data));
  }

  addTask() {
    this.taskService.addTask(this.taskForm.value.task);
    this.taskForm.reset();
  }

  checkUnCheck(task: Task) {
    const updatedTask = { ...task, checked: !task.checked };
    this.taskService.updateTask(updatedTask);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}
