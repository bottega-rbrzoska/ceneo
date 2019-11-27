import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'ce-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {

  constructor(private productService: ProductService) { }

  handleSave(product) {
    console.log(product);
  }

}
