import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// JWT Module
import { JwtModule } from '@auth0/angular-jwt';

// APP Component
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

// Modules
import { PagesModule } from './components/pages/pages.module';
import { SharedModule } from './components/shared/shared.module';
import { ServicesModule } from './services/services.module';

// Router
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    SharedModule,
    HttpClientModule,
    ServicesModule.forRoot(),
    JwtModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
