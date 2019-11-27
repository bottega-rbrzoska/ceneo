import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TestComponent} from './test/test.component';
import {NavigationComponent} from './navigation/navigation.component';
import {ContactComponent} from './contact/contact.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    TestComponent,
    NavigationComponent,
    ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class MainModule { }
