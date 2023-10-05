import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FoodCheckoutModal } from 'src/app/_core/models/foodCheckoutModal.model';
import { Food } from 'src/app/_core/models/food.model';
import { EventBusData } from 'src/app/_shared/helpers/eventBus/event-bus-data';
import { EventBusEnum } from 'src/app/_shared/helpers/eventBus/event-bus.enum';
import { EventBusService } from 'src/app/_shared/helpers/eventBus/event-bus.service';

@Component({
  selector: 'app-carts-totals',
  templateUrl: './carts-totals.component.html',
  styleUrls: ['./carts-totals.component.scss'],
})
export class CartsTotalsComponent implements OnInit, OnChanges {
  @Input() foods: Food[] = [];
  foodCheckout: FoodCheckoutModal = new FoodCheckoutModal();
  totalPrice: number = 0;
  totalDelivery: number = 10;
  constructor(private eventBus: EventBusService) {}

  ngOnInit() {
    this.getFoodsTotalPrice(this.foods);
    this.getFoodsFromEventBus();
  }

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['foods'].firstChange;
    if (!change) {
      this.getFoodsTotalPrice(this.foods);
    }
  }

  public onCallCheckout() {
    this.createFoodCheckObject();
    this.eventBus.emit(
      new EventBusData(
        EventBusEnum.TOOGLE_FOOD_CARTS_CHECKOUT_MODAL,
        this.foodCheckout
      )
    );
  }

  public getFoodsTotalPrice(foods: any) {
    if (foods) {
      foods.map((item: any) => ({
        price: item.price,
        quantity: item.quantity,
      }));
      this.totalPrice = foods.reduce((sum: number, i: any) => {
        return sum + i.price;
      }, 0);
    }
  }

  public getFoodsFromEventBus() {
    this.eventBus.on(EventBusEnum.GET_ALL_FOOD_CARTS, (data: any) => {
      this.foods = data;
      this.getFoodsTotalPrice(data);
    });
  }

  private createFoodCheckObject() {
    this.foodCheckout.foods = this.foods.map((item: any) => ({
      foodId: item.id,
      foodTitle: item.title,
      foodQte: item.quantity,
      foodPrice: item.price,
      foodImg: item.img,
    }));
    this.foodCheckout.show_Modal = true;
    this.foodCheckout.totals = this.totalPrice + this.totalDelivery;
  }
}
