import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private foodCart$ = new BehaviorSubject<Food[]>(
    JSON.parse(localStorage.getItem('food_cart') || '[]')
  );
  constructor() {}

  public getFoodFromLocalStorage(): Observable<Food[]> {
    return this.foodCart$.asObservable();
  }

  public removeFoodFromLocalStorage(id: number) {
    const foods = JSON.parse(localStorage.getItem('food_cart') || '[]');
    if (foods && foods.length) {
      const foodsCart = [...foods].filter((item) => item.id === id).shift();
      const index = foods.map((item: any) => item.id).indexOf(foodsCart.id);
      if (index > -1) {
        foods.splice(index, 1);
      }
      localStorage.setItem('food_cart', JSON.stringify([...foods]));
      this.foodCart$.next(
        JSON.parse(localStorage.getItem('food_cart') || '[]')
      );
    }
  }

  public removeAllFoodFromLocalStorage() {
    const foods = JSON.parse(localStorage.getItem('food_cart') || '[]');
    if (foods && foods.length) {
      localStorage.setItem('food_cart', JSON.stringify([]));
      this.foodCart$.next(
        JSON.parse(localStorage.getItem('food_cart') || '[]')
      );
    }
  }

  public saveFoodToLocalStorage(food: Food): boolean {
    if (!food) return false;

    const foods = JSON.parse(localStorage.getItem('food_cart') || '[]');
    if (typeof foods !== 'undefined') {
      if (foods?.length === 0) {
        this.assignFoodToStorage(foods, food, 'food_cart');
      } else if (foods?.length > 0) {
        this.updateFoodQteToStorage(foods, food);
      }
    }

    return true;
  }

  private assignFoodToStorage(foods: any, food: Food, foodTypeStorage: string) {
    const foodsCart = [...foods, food];
    localStorage.setItem(foodTypeStorage, JSON.stringify(foodsCart));
    this.foodCart$.next(JSON.parse(localStorage.getItem('food_cart') || '[]'));
  }

  private updateFoodQteToStorage(foods: any, food: Food) {
    const foodsCartToUpdate = [...foods]
      .filter((item) => item.id === food.id)
      .shift();
    if (!foodsCartToUpdate) {
      this.assignFoodToStorage(foods, food, 'food_cart');
      return;
    }
    foodsCartToUpdate.quantity++;

    const index = foods
      .map((item: any) => item.id)
      .indexOf(foodsCartToUpdate.id);
    if (index > -1) {
      foods.splice(index, 1);
    }

    localStorage.setItem(
      'food_cart',
      JSON.stringify([...foods, foodsCartToUpdate])
    );
    this.foodCart$.next(JSON.parse(localStorage.getItem('food_cart') || '[]'));
  }
}
