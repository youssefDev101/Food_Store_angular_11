import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
