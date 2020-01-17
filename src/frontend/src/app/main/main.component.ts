import { Component, OnInit } from '@angular/core';

declare function init_script();

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  ngOnInit() {
    init_script();
  }
}
