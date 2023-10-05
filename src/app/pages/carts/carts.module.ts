import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsListComponent } from './carts-list/carts-list.component';
import { CartsTableComponent } from './carts-table/carts-table.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { CartsRoutingModule } from './carts-routing.module';
import { CartsTrashComponent } from './carts-trash/carts-trash.component';
import { CartsTotalsComponent } from './carts-totals/carts-totals.component';
import { CartsCheckoutComponent } from './carts-checkout/carts-checkout.component';
import { CartsFormsComponent } from './carts-forms/carts-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

const DECLARATIONS: any[] = [
  CartsListComponent,
  CartsTableComponent,
  CartsTrashComponent,
  CartsTotalsComponent,
  CartsCheckoutComponent,
  CartsFormsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CartsRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [DECLARATIONS],
  exports: [DECLARATIONS],
  providers: [],
})
export class CartsModule {}
