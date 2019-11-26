import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'ce-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
   }

  ngOnInit() {
  }

}
