import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { MyRequestsComponent } from '../_components/my-requests/my-requests.component';
import { GlobalRequestsComponent } from '../_components/global-requests/global-requests.component';
import { NewRequestComponent } from '../_components/new-request/new-request.component';
import { RequestComponent } from '../_components/request/request.component';
import { RequestViewerComponent } from '../_components/request-viewer/request-viewer.component';
import { LandingComponent } from '../_components/landing/landing.component';
import { SubmissionComponent } from '../_components/submission/submission.component';
import { NavbarComponent } from '../_components/navbar/navbar.component';


const appRoutes: Routes = [
  { path: 'my-requests', component: MyRequestsComponent },
  { path: 'request-decisions', component: GlobalRequestsComponent },
  { path: 'landing', component: LandingComponent }
  //TODO make landing page with user info??
  /*{ path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },*/
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  declarations: [
    AppComponent,
    MyRequestsComponent,
    GlobalRequestsComponent,
    NewRequestComponent,
    RequestComponent,
    RequestViewerComponent,
    LandingComponent,
    NavbarComponent,
    SubmissionComponent
  ]
})
export class RoutingModule { }
