import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ProductService {
 
    private productUrl = 'api/products'; 
   
    constructor(private http: HttpClient) { }

    getProducts(options: any): Observable<Product[]> {
        let params = {};

        if (options) {
            params = {
                ...options.category && {category: options.category},
                ...options.location && {location: options.location}
            }
        };

        return this.http.get<Product[]>(this.productUrl, {params: params});
    }

    getProduct(id: string): Observable<Product> {
        return this.http.get<Product>(this.productUrl+`/${id}`);
    }

    addProduct (product: Product): Observable<Product> {
        return this.http.post<Product>(this.productUrl, product);
    }
}