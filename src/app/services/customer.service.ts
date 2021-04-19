import { Customer } from './../model/customer';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private endpoint = 'http://localhost:8080/api/v1/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    let username = 'admin ';
    let password = '123456';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.get(this.endpoint, { headers })
      .pipe(
        map(response => response as Customer[])
      );
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.endpoint, customer);
  }

  getCustomerById(customerId): Observable<Customer> {
    return this.http.get<Customer>(`${this.endpoint}/${customerId}`);
  }

  update(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.endpoint}/${customer.customerId}`, customer);
  }

  delete(customerId: number): Observable<Customer> {
    return this.http.delete<Customer>(`${this.endpoint}/${customerId}`);
  }

}
