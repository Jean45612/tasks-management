import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.states';
import { Store } from '@ngrx/store';
import { selectUserName } from '../../store/selectors/auth.selectors';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  userName: Observable<string | null>;

  constructor(private store: Store<AppState>, private authService: AuthService) {
    this.userName = this.store.select(selectUserName);
  }

  logout() {
    this.authService.logout();
  }
}
