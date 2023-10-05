import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryListComponent } from './restaurants-categories/category-list/category-list.component';
import { CategoryItemComponent } from './restaurants-categories/category-item/category-item.component';
import { CategoryModalComponent } from './restaurants-categories/category-modal/category-modal.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';
import { ComponentsModule } from 'src/app/_components/components.module';
import { CoreModule } from 'src/app/_core/core.module';
import { SharedModule } from 'src/app/_shared/shared.module';
import { RestaurantsRoutingModule } from './restaurants-routing.module';

const DECLARATIONS: any[] = [
  CategoryItemComponent,
  CategoryListComponent,
  CategoryModalComponent,
  RestaurantsListComponent,
  RestaurantsDetailsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ComponentsModule,
    SharedModule,
    RestaurantsRoutingModule,
  ],
  declarations: [DECLARATIONS],
  exports: [DECLARATIONS],
  providers: [],
})
export class RestaurantsModule {}
