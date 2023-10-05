import { Component, OnInit } from '@angular/core';
import { FoodCheckoutModal } from 'src/app/_core/models/foodCheckoutModal.model';
import { EventBusData } from 'src/app/_shared/helpers/eventBus/event-bus-data';
import { EventBusEnum } from 'src/app/_shared/helpers/eventBus/event-bus.enum';
import { EventBusService } from 'src/app/_shared/helpers/eventBus/event-bus.service';
import { Utils } from 'src/app/_shared/helpers/utils/utils';

@Component({
  selector: 'app-carts-checkout',
  templateUrl: './carts-checkout.component.html',
  styleUrls: ['./carts-checkout.component.scss'],
})
export class CartsCheckoutComponent implements OnInit {
  foodsCheckout: FoodCheckoutModal = new FoodCheckoutModal();
  constructor(private eventBus: EventBusService,public utils :Utils) {}

  ngOnInit() {
    this.getFoodsCheckoutFromEventBus();
  }

  public getFoodsCheckoutFromEventBus() {
    this.eventBus.on(
      EventBusEnum.TOOGLE_FOOD_CARTS_CHECKOUT_MODAL,
      (data: any) => {
        this.foodsCheckout = data;
      }
    );
  }

  public onCloseModal() {
    this.foodsCheckout.foods = [];
    this.foodsCheckout.totals = 0;
    this.foodsCheckout.show_Modal = false;

    this.eventBus.emit(
      new EventBusData(
        EventBusEnum.TOOGLE_FOOD_CARTS_CHECKOUT_MODAL,
        this.foodsCheckout
      )
    );
  }
}
