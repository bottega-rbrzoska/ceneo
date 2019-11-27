import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightDirective} from './directives/highlight.directive';
import {TestDirective} from './directives/test.directive';
import {NieWiemButtonComponent} from './components/nie-wiem-button/nie-wiem-button.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MyIfDirective } from './directives/my-if.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    TestDirective,
    NieWiemButtonComponent,
    MyIfDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    HighlightDirective,
    TestDirective,
    NieWiemButtonComponent,
    MyIfDirective
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
