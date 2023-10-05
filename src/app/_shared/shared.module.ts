import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CircleComponent } from './components/circle/circle.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { Globals } from './helpers/models/globals';
import { ErrorComponent } from './components/error/error.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { Utils } from './helpers/utils/utils';
import { ArrowBackButtonComponent } from './components/arrow-back-button/arrow-back-button.component';

const DECLARATIONS: any[] = [
  SpinnerComponent,
  CircleComponent,
  BreadcrumbComponent,
  SocialMediaComponent,
  SeparatorComponent,
  ArrowBackButtonComponent,
  ErrorComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [DECLARATIONS],
  exports: [DECLARATIONS],
  providers: [Globals,Utils],
})
export class SharedModule {}
