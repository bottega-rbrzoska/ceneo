import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},  { path: 'test', component: TestComponent },
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
