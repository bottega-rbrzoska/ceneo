import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductsComponent } from './product/products/products.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { HighlightDirective } from './highlight.directive';
import { TestDirective } from './test.directive';
import { TestService } from './test.service';
import { MyToken } from './tokens/my-token.token';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductsComponent,
    PageNotFoundComponent,
    TestComponent,
    HighlightDirective,
    TestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: MyToken, useFactory: () => new TestService(), multi: true},
    { provide: MyToken, useFactory: () => new TestService(), multi: true}],
  bootstrap: [AppComponent],

})
export class AppModule { }
