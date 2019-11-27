import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { TestComponent } from './main/test/test.component';
import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth.guard';
import { ContactComponent } from './main/contact/contact.component';
import { ViewChildComponent } from './main/view-child/view-child.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about/:name', component: AboutComponent },
  { path: 'products',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
    { path: 'test', component: TestComponent },
    { path: 'view-child', component: ViewChildComponent },
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
