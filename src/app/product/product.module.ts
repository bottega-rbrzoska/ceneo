import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductService } from './services/product.service';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add', component: ProductAddComponent },
  { path: 'edit/:id', component: ProductEditComponent }
];
@NgModule({
  declarations: [

    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
