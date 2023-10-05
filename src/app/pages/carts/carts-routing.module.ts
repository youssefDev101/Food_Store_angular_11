import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsListComponent } from './carts-list/carts-list.component';

const routes: Routes = [
  { path: '', component: CartsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartsRoutingModule { }
