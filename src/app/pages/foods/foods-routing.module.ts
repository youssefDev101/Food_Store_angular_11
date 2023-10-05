import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsDetailsComponent } from './foods-details/foods-details.component';
import { FoodsListComponent } from './foods-list/foods-list.component';

const routes: Routes = [
  {
    path: '',
    component: FoodsListComponent,
    children: [
      {
        path: 'infos',
        component: FoodsDetailsComponent,
      },
    ],
  },
  {
    path: 'details',
    component: FoodsDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodsRoutingModule {}
