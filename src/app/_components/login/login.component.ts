import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { Router } from '@angular/router';

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


  constructor(private auth: AuthenticationService, private router: Router) { }

  submitLogin(email, password) {
    this.auth.authorize(this.email, this.password).subscribe(response => {
      this.auth.setJwt(response.headers.get('Authorization'));
      console.log(response.headers.get('Authorization'));
      if (this.auth.getJwt().length > 0) {
        this.router.navigate(['/landing']);
      }
    });

  }

  ngOnInit() {
  }

}
