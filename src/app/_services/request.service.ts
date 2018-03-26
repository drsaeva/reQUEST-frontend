import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Request } from '../request';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'   //TODO replace or remove as needed
  })
};

@Injectable()
export class RequestService {

  constructor(private http: HttpClient) { }

  //TODO include jwt token in header
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  //TODO endpoint url should be provided in config file
  private requestUrl = 'requests';

  createRequest(request: Request): Promise<Request> {
    return this.http
      .post(this.requestUrl, JSON.stringify(request), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Request)
      .catch(this.handleError)
  }


  private handleError(error: any): Promise<any> {
   console.error('An error occurred', error);
   return Promise.reject(error.message || error);
 }

}
