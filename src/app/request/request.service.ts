import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'   //TODO replace or remove as needed
  })
};

@Injectable()
export class RequestService {

  constructor(private http: HttpClient) { }

  /** POST: add a new hero to the database */
  addRequest (request: Request): Observable<Request> {
    return this.http.post<Request>(this.retrieveMyRequestsUrl, request, httpOptions)
      .pipe();
  }

}
