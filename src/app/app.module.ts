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
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { ReactiveComponent } from './contact/reactive/reactive.component';
import { TemplateComponent } from './contact/template/template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NieWiemButtonComponent } from './nie-wiem-button/nie-wiem-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    TestComponent,
    HighlightDirective,
    TestDirective,
    NavigationComponent,
    ContactComponent,
    ReactiveComponent,
    TemplateComponent,
    NieWiemButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent],

})
export class AppModule { }
