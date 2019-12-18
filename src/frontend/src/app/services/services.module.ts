import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import services
import { HttpService } from './http/http.service';
import { AuthenticateService } from './http/authenticate.service';


@NgModule({
    declarations: [],
    imports: [
        HttpClientModule
    ],
    exports: [],
    providers: [],
})

export class ServicesModule {
    static forRoot() {
        return {
            ngModule: ServicesModule,
            providers: [
                HttpService,
                AuthenticateService
            ]
        };
    }
}

export {
    HttpService,
    AuthenticateService
};
