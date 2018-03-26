import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/app-routing.module';
import { RequestViewerComponent } from './_components/request-viewer/request-viewer.component';
import { RequestComponent } from './_components/request/request.component';
import { AppComponent } from './app.component';
import { NewRequestComponent } from './_components/new-request/new-request.component';
import { LoginComponent } from './_components/login/login.component';
import { ModalModule } from 'ngx-bootstrap';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    ModalModule.forRoot(),
    MatDatePickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewRequestComponent]

})
export class AppModule { }
