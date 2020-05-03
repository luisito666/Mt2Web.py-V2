import { Component, OnInit } from '@angular/core';

// Environments
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styles: []
})
export class DescriptionComponent implements OnInit {

  serverName: string

  constructor() { }

  ngOnInit() {
    this.serverName = environment.serverName;
  }

}
