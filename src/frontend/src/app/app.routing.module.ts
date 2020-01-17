import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

// Main Component
import { MainComponent } from './main/main.component';


const RootRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: '**', component: MainComponent }
];


const RoutesConfig: ExtraOptions = {
    useHash: true
};


@NgModule({
    imports: [

        RouterModule.forRoot(RootRoutes, RoutesConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
