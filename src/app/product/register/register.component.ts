import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './../../model/product';
import { ProductService } from './../../services/product.service';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  product: Product = new Product();

  constructor(private service: ProductService) { }

  ngOnInit(): void {
  }

  save(form: NgForm): void {
    if (form.invalid) {
      console.log('Formulario no válido');
      return;
    }
    console.log(form);
    console.log(this.product);
  }

}
