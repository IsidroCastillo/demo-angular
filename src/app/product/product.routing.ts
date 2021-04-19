import { Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { RegisterComponent } from './register/register.component';

export const ProductRoutes: Routes = [
  {
    path: '', component: ProductComponent,
  },
  {
    path: 'register', component: RegisterComponent,
  },
];
