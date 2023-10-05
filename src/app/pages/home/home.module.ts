import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/_components/components.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { RestaurantsModule } from '../restaurants/restaurants.module';
import { HomePageComponent } from './home-page.component';
import { HomeRoutingModule } from './home-routing.module';

const DECLARATIONS: any[] = [HomePageComponent];

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
    ComponentsModule,
    RestaurantsModule,
  ],
  declarations: [DECLARATIONS],
  exports: [DECLARATIONS],
  providers: [],
})
export class HomeModule {}
