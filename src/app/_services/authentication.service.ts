import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    authorize(username: string, password: string) {
        return this.http.post<any>('/reQUEST/auth',
                                   {username: username, password: password},
                                   {observe: 'response'})
                        .map(res => {
                          this.setjwt(res.headers.get('Authorization'));})
                        .subscribe();
    }

    private jwt: string;
    setjwt(jwt: string) {
      this.jwt = jwt;
    }
    getJwt() { return this.jwt;}

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
