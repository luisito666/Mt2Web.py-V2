import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';


const ROUTES: Routes = [
    { path: '', component: MainComponent },
    { path: '**', component: MainComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, {useHash: true});
