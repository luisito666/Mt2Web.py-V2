import { Component, OnInit, ElementRef } from "@angular/core";

// Services
import { HttpService } from '../../../../services/http/http.service';

// Redux
import { Store } from '@ngrx/store'
import { AppState } from '../../../../store/app.reducers'
import { HiddenRankingGuildModal } from 'src/app/store/actions';

@Component({
    selector: 'ListGuild',
    templateUrl: './list-guild.component.html',
    styles: [],
    // host: {
    //     '(document:click)': 'onClick($event)',
    // }
})
export class ListGuildComponent implements OnInit {

    guilds: any = [];

    constructor(
        public http: HttpService,
        private store: Store<AppState>,
        private _eref: ElementRef
    ) {}

    ngOnInit() {
        this.load_guilds()
    }

    load_guilds() {
        this.http.get_guilds().catch();
    }

    // onClick(event) {
    //     if (event.target.className === 'fas fa-users' || event.target.className === 'btn_rankings_groups pointer') {
    //         return
    //     }
    //     if (!this._eref.nativeElement.contains(event.target)) {
    //         this.store.dispatch(HiddenRankingGuildModal({hidden: true}))
    //     }
    // }

}