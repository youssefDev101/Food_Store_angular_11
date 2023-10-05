import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/_core/models/food.model';
import { Utils } from 'src/app/_shared/helpers/utils/utils';

@Component({
  selector: 'app-foods-card',
  templateUrl: './foods-card.component.html',
  styleUrls: ['./foods-card.component.scss'],
})
export class FoodsCardComponent implements OnInit {
  @Input() food: Food = new Food();
  constructor(private router: Router, public utils: Utils) {}

  ngOnInit() {}

  public onNavigateToFoodDetails(food: Food) {
    this.router.navigate(['/foods/details'], {
      queryParams: {
        id: `${food.id}`,
        title: `${food.title}`,
        timeStep: `${new Date().getTime()}`,
      },
    });
  }
}
