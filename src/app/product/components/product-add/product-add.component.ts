import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import { forkJoin, noop, of, throwError } from 'rxjs';
import { catchError, tap, delay, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'ce-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {

  selectData$;
  showError = false;

  constructor(private productService: ProductService, private router: Router) {
    this.selectData$ = forkJoin(productService.getCategories(),
    // of(null).pipe(delay(2000), switchMap(() => throwError('error')))).pipe(
    //   tap(noop, () => this.showError = true)
    productService.getCountries())
  }

  handleSave(product) {
    console.log(product);
    this.router.navigateByUrl('/products');
  }

}
