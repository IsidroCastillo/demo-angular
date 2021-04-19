import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private service: CustomerService) { }

  ngOnInit(): void {
    this.getCusrtomers();
  }

  getCusrtomers(): void {
    this.service.getCustomers()
      .subscribe(resp => {
        console.log(resp);
        this.customers = resp;
      });
  }

  delete(customer: Customer): void {
    this.service.delete(customer.customerId)
      .subscribe(resp => {
        this.customers = this.customers.filter(cli => cli !== customer);
      });
  }

}
