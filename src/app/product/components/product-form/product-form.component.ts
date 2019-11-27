import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../models/product.interface';

@Component({
  selector: 'ce-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product[];
  @Output() save = new EventEmitter();
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    description: new FormControl(''),
    category: new FormControl('', Validators.required)
  });

  ngOnInit() {
    if (this.product) {
      this.productForm.patchValue(this.product);
    }
  }

  handleSubmit() {
    if (this.productForm.valid) {
      this.save.emit(this.productForm.value);
    }
  }

}
