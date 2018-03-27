import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-login',
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  email: string;
  password: string;
  private submitted: false;


  constructor(private auth: AuthenticationService) { }

  submitLogin(email, password) {
    this.auth.authorize(this.email, this.password);
  }

  ngOnInit() {
  }

}
