import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
  <a href="#cap1" class="nav_uncle" style="top: 25%;"></a>
  <a href="#cap2" class="nav_uncle" style="top: 32%;"></a>
  <a href="#cap3" class="nav_uncle" style="top: 39%;"></a>
  <a href="#cap4" class="nav_uncle" style="top: 46%;"></a>
  <a href="#cap5" class="nav_uncle" style="top: 53%;"></a>
  <a href="#cap6" class="nav_uncle" style="top: 60%;"></a>
  <a href="#cap7" class="nav_uncle" style="top: 67%;"></a>
  `,
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll( ) {
    const el = document.getElementById('navbar');
    el.scrollTop = el.scrollHeight;
  }

}
