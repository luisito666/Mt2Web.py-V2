import { Component, OnInit } from "@angular/core";

// Services
import { HttpService } from '../../../../services/http/http.service';

// Interfaces
import { DjangoResponse } from '../../../../interfaces/http.response';


@Component({
    selector: 'ListGuild',
    templateUrl: './list-guild.component.html',
    styles: [],
})
export class ListGuildComponent implements OnInit {

    guilds: any = [];
    positions_class = ['fisrt_position', 'second_position', 'threeth_position', 'fourth_position', 'fith_position']

    constructor(
        private http: HttpService,
    ) {}

    ngOnInit() {
        this.load_guilds()
    }

    load_guilds() {
        this.http.get_guilds().subscribe(({results}: DjangoResponse) => {
            this.guilds = results;
        });
    }

}