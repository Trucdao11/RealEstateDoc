import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProductsPagination(page: number = 1, limit: number = 10): Observable<HttpResponse<Product[]>> {
    let params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', limit.toString());

    return this.http.get<Product[]>(this.baseUrl, { params, observe: 'response' });
  }

  getAllProducts(): Observable<HttpResponse<Product[]>> {
    return this.http.get<Product[]>(this.baseUrl, { observe: 'response' });
  }

  updateProduct(productId: string, productData: Partial<Product>): Observable<HttpResponse<Product>> {
    return this.http.patch<Product>(
      `${this.baseUrl}/${productId}`, 
      productData,               
      { observe: 'response' }
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }
}
