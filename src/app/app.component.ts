import { Component } from '@angular/core';
import { AppState } from './store/app.states';
import { Store } from '@ngrx/store';
import { selectAuthenticated } from './store/selectors/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLoggedIn: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isLoggedIn = this.store.select(selectAuthenticated);
  }
}
