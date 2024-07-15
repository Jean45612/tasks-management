import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { beforeLoginGuard } from './guards/before-login.guard';
import { afterLoginGuard } from './guards/after-login.guard';
import { TasksComponent } from './components/tasks/tasks.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [beforeLoginGuard]
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [afterLoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
