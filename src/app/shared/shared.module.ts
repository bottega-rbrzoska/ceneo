import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightDirective} from './directives/highlight.directive';
import {TestDirective} from './directives/test.directive';
import {NieWiemButtonComponent} from './components/nie-wiem-button/nie-wiem-button.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MyIfDirective } from './directives/my-if.directive';
import { TwitterItemComponent } from './twitter-item/twitter-item.component';
import { TwitterImgContentComponent } from './twitter-img-content/twitter-img-content.component';
import { TwitterTextContentComponent } from './twitter-text-content/twitter-text-content.component';

@NgModule({
  declarations: [
    HighlightDirective,
    TestDirective,
    NieWiemButtonComponent,
    MyIfDirective,
    TwitterItemComponent,
    TwitterImgContentComponent,
    TwitterTextContentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    HighlightDirective,
    TestDirective,
    NieWiemButtonComponent,
    MyIfDirective,
    TwitterItemComponent,
    TwitterImgContentComponent,
    TwitterTextContentComponent
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
