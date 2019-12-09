import { Component, OnInit } from '@angular/core';

declare function init_script();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spametin2';

  ngOnInit(){
    init_script();
  }
}
