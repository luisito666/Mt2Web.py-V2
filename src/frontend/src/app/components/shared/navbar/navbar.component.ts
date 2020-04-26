import { Component  } from '@angular/core';
// Services
import { LoginService } from 'src/app/services/login.service';

// Redux
import { Store } from '@ngrx/store'
import { AppState } from '../../../store/app.reducers';
import { ShowLoginModal } from '../../../store/actions';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(
    public login: LoginService,
    private store: Store<AppState>
  ) { }

  show_modal() {
    this.store.dispatch(ShowLoginModal({show: true}))
  }
}
