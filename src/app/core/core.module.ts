import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestService} from './test.service';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { UserStore } from './user.store';

@NgModule({
  declarations: [],
  imports: [
    SharedModule.forRoot(),
    CommonModule,
    HttpClientModule
  ],
  providers: [TestService, AuthService, AuthGuard, UserStore]
})
export class CoreModule { }
