import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RequestViewerComponent } from './request-viewer/request-viewer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RequestComponent } from './request/request.component';


@NgModule({
  declarations: [
    AppComponent,
    RequestViewerComponent,
    NavbarComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
