import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.states';
import { LogIn } from '../../store/actions/auth.actions';
import { selectError } from '../../store/selectors/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  showPassword: boolean = false;
  loginForm: FormGroup = this.formBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  error: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.store.select(selectError).subscribe((state) => {
      this.error = state;
  });
  }

  tooglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.store.dispatch(LogIn({payload: this.loginForm.value}))
    }
  }
}
