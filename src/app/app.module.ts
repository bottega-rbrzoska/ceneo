import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductsComponent } from './product/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
