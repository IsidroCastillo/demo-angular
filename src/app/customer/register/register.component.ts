import { CustomerService } from './../../services/customer.service';
import { Customer } from './../../model/customer';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer(): void {
    this.activatedRoute.params.subscribe(params => {
      const customerId = params['customerId'];
      if (customerId) {
        this.customerService.getCustomerById(customerId).subscribe((cliente) => this.customer = cliente);
      }
    });
  }

  save(): void {
    this.customerService.create(this.customer)
      .subscribe(customer => {
        console.log(customer);
        this.router.navigate(['/customers']);
      }
      );
  }

  update(): void {
    this.customerService.update(this.customer).subscribe(resp => {
      this.router.navigate(['/customers']);
    });

  }

}
