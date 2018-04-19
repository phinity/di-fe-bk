import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
