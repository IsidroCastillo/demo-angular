import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private endpoint = 'http://localhost:8080/api/v1/products';


  constructor(private http: HttpClient) { }

  findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.endpoint}/findAll`)
      .pipe(map(products => products as Product[]));
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.endpoint}/save`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.endpoint}/update`, product);
  }

  eliminarAnime(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/delete/${productId}`);
  }

}
