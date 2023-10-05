import { NgModule } from '@angular/core';
import { FoodsListComponent } from './foods-list/foods-list.component';
import { FoodsIconComponent } from './foods-icon/foods-icon.component';
import { ComponentsModule } from 'src/app/_components/components.module';
import { FoodsCardComponent } from './foods-card/foods-card.component';
import { FoodsBagComponent } from './foods-bag/foods-bag.component';
import { CoreModule } from 'src/app/_core/core.module';
import { FoodsRoutingModule } from './foods-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/_shared/shared.module';
import { FoodsDetailsComponent } from './foods-details/foods-details.component';

const DECLARATIONS: any[] = [
  FoodsListComponent,
  FoodsIconComponent,
  FoodsCardComponent,
  FoodsBagComponent,
  FoodsDetailsComponent,
];

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    CommonModule,
    ComponentsModule,
    FoodsRoutingModule,
  ],
  declarations: [DECLARATIONS],
  exports: [DECLARATIONS],
  providers: [],
})
export class FoodsModule {}
