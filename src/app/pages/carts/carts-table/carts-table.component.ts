import { Component, Input, OnInit } from '@angular/core';
import { Food } from 'src/app/_core/models/food.model';
import { EventBusData } from 'src/app/_shared/helpers/eventBus/event-bus-data';
import { EventBusEnum } from 'src/app/_shared/helpers/eventBus/event-bus.enum';
import { EventBusService } from 'src/app/_shared/helpers/eventBus/event-bus.service';
import { Globals } from 'src/app/_shared/helpers/models/globals';
import { Utils } from 'src/app/_shared/helpers/utils/utils';

@Component({
  selector: 'app-carts-table',
  templateUrl: './carts-table.component.html',
  styleUrls: ['./carts-table.component.scss'],
})
export class CartsTableComponent implements OnInit {
  @Input() foods: Food[] = [];
  constructor(public globals: Globals,private eventBus:EventBusService,public utils :Utils) {}

  ngOnInit() {}

  public onChangeQtePrice(id: number, $event: any) {
    const quantity = parseInt($event.target.value);
    const food: any = this.foods.filter((item) => item.id === id).shift();
    if (quantity === 1) {
      food.price = food.price / food.quantity;
      food.quantity = quantity;
    }
    if (quantity === 2 || quantity === 3) {
      food.price = food.price * quantity;
      food.quantity = quantity;
    }
    const index = this.foods.map((item: any) => item.id).indexOf(food.id);
    if (index > -1) {
      this.foods.splice(index, 1);
    }
    this.foods.push(food);
    this.eventBus.emit(new EventBusData(EventBusEnum.GET_ALL_FOOD_CARTS, this.foods));
  }

  public calculQtePrice(quantity: number, price: number) {
    return (quantity * price).toFixed(2);
  }
}
