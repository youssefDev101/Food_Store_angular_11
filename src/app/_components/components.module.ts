import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModalViewerComponent } from './image-modal-viewer/image-modal-viewer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { SharedModule } from '../_shared/shared.module';
import { CoreModule } from '../_core/core.module';

const DECLARATIONS: any[] = [
  ImageModalViewerComponent,
  NavbarComponent,
  FooterComponent,
  HeroComponent,
];

@NgModule({
  imports: [CommonModule, SharedModule, CoreModule],
  declarations: [DECLARATIONS],
  exports: [DECLARATIONS],
})
export class ComponentsModule {}
