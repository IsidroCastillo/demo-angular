import { Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { RegisterComponent } from './register/register.component';

export const CustomerRoutes: Routes = [
  {
    path: '', component: CustomerComponent,
  },
  {
    path: 'save', component: RegisterComponent
  },
  {
    path: 'update/:customerId', component: RegisterComponent
  }
];
