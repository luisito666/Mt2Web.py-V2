import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// JWT Module
import { JwtModule } from '@auth0/angular-jwt';

// Store and dev tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Effects 
import { EffectsArray } from './store/effects';


// Reducers
import { appReducers } from './store/app.reducers';

// APP Component
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

// Modules
import { PagesModule } from './components/pages/pages.module';
import { SharedModule } from './components/shared/shared.module';
import { ServicesModule } from './services/services.module';

// Router
import { AppRoutingModule } from './app.routing.module';

// Environment
import { environment } from 'src/environments/environment';


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
    RouterModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot( EffectsArray ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
