import { Component, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

// Redux
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { HiddenProfileModal, DeleteToken, DeleteUser } from 'src/app/store/actions';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styles: []
})
export class UserManagerComponent implements OnInit {

  modal: boolean

  constructor(
    private store: Store<AppState>,
    public login: LoginService
  ) { }

  ngOnInit() {
    this.store.select('ui').subscribe( ({modal_profile}) => {
      this.modal = modal_profile;
    })
  }

  logout() {
    this.login.logout();
    this.store.dispatch(HiddenProfileModal({hidden: true}));
    this.store.dispatch(DeleteToken());
    this.store.dispatch(DeleteUser());
  }

  close_modal() {
    this.store.dispatch(HiddenProfileModal({hidden: true}))
  }

  showMenu(event, menu) {
    /* Maneja el menu de tabs de administracion del usuario*/
    let i;
    let content;
    let tabs;
    content = document.getElementsByClassName('content');
    for (i = 0; i < content.length; i++) {
      content[i].style.display = 'none';
    }
    tabs = document.getElementsByClassName('tabs');
    for (i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(' active', '');
    }
    document.getElementById(menu).style.display = 'block';
    event.currentTarget.className += ' active';
  }

}
