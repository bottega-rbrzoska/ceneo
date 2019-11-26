import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsSubj = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubj.asObservable();
  private products: Product[] = [
    {
      avatar: 'testimgurl',
      description: 'descrprod1',
      category: 'inne',
      name: 'prod1',
      price: 10.99,
      id: '1'
    },
    {
      avatar: 'testimgurl',
      description: 'descrprod2',
      category: 'inne',
      name: 'prod2',
      price: 2.99,
      id: '2'
    },
    {
      avatar: 'testimgurl',
      description: 'descrprod3',
      category: 'inne',
      name: 'prod3',
      price: 3.99,
      id: '3'
    }
  ];

  constructor(private http: HttpClient) { }

  getProducts() {
    this.http.get<Product[]>('/api/products', {
      params: { _page: '1', _limit: '10'}
    }).pipe(delay(1)).subscribe(prods => this.productsSubj.next(prods));
  }

  getPoductById(id: string): Product {
    return this.products.find(x => x.id === id);
  }

  searchProductByNameOrDescription(query: string) {
    return this.products.filter( p => p.description.includes(query) || p.name.includes(query));
  }
}
