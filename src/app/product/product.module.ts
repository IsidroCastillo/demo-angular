import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';

import { RouterModule } from '@angular/router';
import { ProductRoutes } from './product.routing';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [ProductComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes),
    FormsModule
  ],
  exports: [
    ProductComponent, RegisterComponent
  ]
})
export class ProductModule { }
