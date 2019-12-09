import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styles: []
})
export class UserManagerComponent implements OnInit {

  @ViewChild('manager', {static: true}) modal: ElementRef;

  constructor(
    public login: LoginService
  ) { }

  ngOnInit() {
    document.getElementById('default').click();
  }

  logout() {
    this.login.logout();
    this.modal.nativeElement.style.display = 'none';

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
