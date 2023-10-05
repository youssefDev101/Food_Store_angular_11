import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { Food } from 'src/app/_core/models/food.model';
import { FoodService } from 'src/app/_core/services/food.service';
import { EventBusData } from 'src/app/_shared/helpers/eventBus/event-bus-data';
import { EventBusEnum } from 'src/app/_shared/helpers/eventBus/event-bus.enum';
import { EventBusService } from 'src/app/_shared/helpers/eventBus/event-bus.service';
import { Globals } from 'src/app/_shared/helpers/models/globals';

@Component({
  selector: 'app-carts-list',
  templateUrl: './carts-list.component.html',
  styleUrls: ['./carts-list.component.scss'],
})
export class CartsListComponent implements OnInit, OnDestroy {
  foodsCarts: Food[] = [];
  foodsCartsSubs: Subscription = new Subscription();
  constructor(
    public globals: Globals,
    private foodService: FoodService,
    private eventBus: EventBusService
  ) {}

  ngOnInit() {
    this.getFoodCartsStorage();
  }

  ngOnDestroy(): void {
    if (this.foodsCartsSubs) {
      this.foodsCartsSubs.unsubscribe();
    }
  }

  public getFoodCartsStorage() {
    this.foodsCartsSubs = this.foodService.getFoodFromLocalStorage().subscribe(
      (data) => {
        this.foodsCarts = data;
      },
      (err) => {
        return throwError(err);
      }
    );
  }
  public sendFood() {
    this.eventBus.emit(
      new EventBusData(EventBusEnum.GET_ALL_FOOD_CARTS, this.foodsCarts)
    );
  }
}
