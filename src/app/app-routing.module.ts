import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationStrategy } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './product/products/products.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about/:name', component: AboutComponent },
  { path: 'products', children: [
    { path: '', component: ProductsComponent },
    { path: 'add', component: ProductAddComponent },
    { path: 'edit/:id', component: ProductEditComponent }
  ] },
  { path: 'test', component: TestComponent },
  { path: '**', component: PageNotFoundComponent}
];
// /product productsComponent
// /product/add addProduct
// /product/edit/3 editProduct
// /page-not-found
@NgModule({
  // routing bez url z przeglądarki
  // providers: [Location,
  // { provide: LocationStrategy, useClass: MockLocationStrategy}]
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
