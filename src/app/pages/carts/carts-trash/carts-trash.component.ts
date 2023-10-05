import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from 'src/app/_core/services/food.service';

@Component({
  selector: 'app-carts-trash',
  templateUrl: './carts-trash.component.html',
  styleUrls: ['./carts-trash.component.scss'],
})
export class CartsTrashComponent implements OnInit {
  @Input() foodId: number = 0;
  constructor(private foodService: FoodService) {}

  ngOnInit() {}

  public onRemoveFoodFromLocalStorage() {
    this.foodService.removeFoodFromLocalStorage(this.foodId);
  }
}
