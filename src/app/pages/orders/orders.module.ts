import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/_components/components.module';
import { CoreModule } from 'src/app/_core/core.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/_shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';

const DECLARATIONS: any[] = [OrdersListComponent, OrdersTableComponent];

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    CommonModule,
    ComponentsModule,
    OrdersRoutingModule,
  ],
  declarations: [DECLARATIONS],
  exports: [DECLARATIONS],
  providers: [],
})
export class OrdersModule {}
