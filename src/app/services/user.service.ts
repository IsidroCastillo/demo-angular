import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: string = 'http://localhost:8080/api/v1/customers';

  constructor(private http: HttpClient) { }
/*
  login(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get(`${this.endpoint}`, { headers, responseType: 'text' as 'json' });
  }
*/

  login(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get(`${this.endpoint}`, { headers, responseType: 'text' as 'json' });
  }

}
