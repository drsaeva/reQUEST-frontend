import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Request } from '../request';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class RequestService {

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  //TODO include jwt token in header
  private jwt = this.auth.getJwt();
  private headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authentication': this.jwt
                });

  //TODO endpoint url should be provided in config file
  private requestUrl = '/reQUEST/submit';

  createRequest(request: Request): Promise<Request> {
    return this.http
      .post(this.requestUrl, JSON.stringify(request), { headers: this.headers })
      .toPromise()
      .then(res => res as Request)
      .catch(this.handleError)
  }


  private handleError(error: any): Promise<any> {
   console.error('An error occurred', error);
   return Promise.reject(error.message || error);
 }

}
