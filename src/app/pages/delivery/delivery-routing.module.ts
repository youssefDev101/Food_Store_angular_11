import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryItemDetailsComponent } from './delivery-item-details/delivery-item-details.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';

const routes: Routes = [
  {
    path: '',
    component: DeliveryListComponent
  },
  {
    path: ':id',
    component: DeliveryItemDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryRoutingModule {}
