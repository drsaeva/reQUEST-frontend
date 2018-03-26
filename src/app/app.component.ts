import { Component } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { LandingComponent } from './_components/landing/landing.component';
import { LoginComponent } from './_components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
}
