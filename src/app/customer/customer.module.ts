
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CustomerComponent } from '../customer/customer.component';
import { CustomerRoutes } from './customer.routing';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    CustomerComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerRoutes),
    FormsModule
  ],
  exports: [
    CustomerComponent,
    RegisterComponent
  ]
})
export class CustomerModule { }
