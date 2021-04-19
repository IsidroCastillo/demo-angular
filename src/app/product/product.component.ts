import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './../model/product';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products: Product[] = [];

  constructor(private service: ProductService, private routes: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  viewRegitrar(): void{
    this.routes.navigate(['/products/register']);
  }

  getProducts(): void {
    this.service.findAllProducts().subscribe(response => {
      console.log(response);
      this.products = response;
    });

  }

  deleteProduct(productId: number): void {
    this.service.eliminarAnime(productId)
    .subscribe(response =>{
      this.getProducts();
    });
  }


  ventanaConfirmar(product: Product): void {
       this.deleteProduct(product.productId);
  }

}
