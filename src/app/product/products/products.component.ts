import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product.interface';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'ce-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  constructor(private productService: ProductService, private authService: AuthService) {
    this.products$ = productService.products$;
    productService.getProducts();
    authService.isLoggedIn$.subscribe(console.log);
   }


  ngOnInit() {
  }

}
