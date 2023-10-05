import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/_components/components.module';
import { CoreModule } from 'src/app/_core/core.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/_shared/shared.module';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { DeliveryIconComponent } from './delivery-icon/delivery-icon.component';
import { DeliveryItemComponent } from './delivery-item/delivery-item.component';
import { DeliveryItemDetailsComponent } from './delivery-item-details/delivery-item-details.component';
import { DeliveryBadgeComponent } from './delivery-badge/delivery-badge.component';

const DECLARATIONS: any[] = [
  DeliveryListComponent,
  DeliveryIconComponent,
  DeliveryItemComponent,
  DeliveryItemDetailsComponent,
  DeliveryBadgeComponent
];

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    CommonModule,
    ComponentsModule,
    DeliveryRoutingModule,
  ],
  declarations: [DECLARATIONS],
  exports: [DECLARATIONS],
  providers: [],
})
export class DeliveryModule {}
