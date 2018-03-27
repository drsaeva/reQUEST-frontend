import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/app-routing.module';
import { RequestViewerComponent } from './_components/request-viewer/request-viewer.component';
import { RequestComponent } from './_components/request/request.component';
import { AppComponent } from './app.component';
import { NewRequestComponent } from './_components/new-request/new-request.component';
import { LoginComponent } from './_components/login/login.component';
import { AuthenticationService } from './_services/authentication.service';
import { ModalModule } from 'ngx-bootstrap';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

//import { MatDatepickerModule } from '@angular/material/datepicker';
//import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    ModalModule.forRoot(),
    FormsModule
  //  MatDatePickerModule.forRoot()
  ],
  providers: [AuthenticationService,
              {provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent],
  entryComponents: [NewRequestComponent]

})
export class AppModule { }
