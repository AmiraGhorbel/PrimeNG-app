import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Product } from 'src/app/models/product/product';

@Injectable()
export class ProductService {
    baseurl = 'http://localhost:3000/data/';
    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    productNames: string[] = [
        "Bamboo Watch",
        "Black Watch",
        "Blue Band"
    ];

    constructor(private http: HttpClient) { }
    listProduits(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseurl);
    }
    getProducts() {
        return this.http.get<any>('assets/products.json')
            .toPromise()
            .then(res => <Product[]>res.data)
            .then(data => { return data; });
    }
    GetProduct2(id: string): Observable<Product> {
        return this.http.get<Product>(this.baseurl + id);
    }
    AddProduit(p: Product): Observable<Product> {
        return this.http.post<Product>(this.baseurl, p);
    }
    UpdateProduit(id:string, p:Product): Observable<Product> {
        return this.http.put<Product>(this.baseurl + '/' + id, p);
    }
    DelateProduit(id:string): Observable<Product>
  {
    return this.http.delete<Product>(this.baseurl + '/' + id);
  }
}