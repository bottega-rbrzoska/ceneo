import {Component} from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'ce-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {

  constructor(private productService: ProductService) { }

  handleSave(product) {
    console.log(product);
  }
}
