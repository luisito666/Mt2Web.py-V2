import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './services/services.module';
import { JwtModule } from '@auth0/angular-jwt';
// APP Component
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

// Modules
import { PagesModule } from './components/pages/pages.module';
import { SharedModule } from './components/shared/shared.module';

// Router
import { APP_ROUTES } from './app.routes';


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
    APP_ROUTES,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
