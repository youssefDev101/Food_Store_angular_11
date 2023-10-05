import { Component, OnInit } from '@angular/core';
import { interval, Subscription, throwError } from 'rxjs';
import { Category } from 'src/app/_core/models/catogory.model';
import { Food } from 'src/app/_core/models/food.model';
import { ApiService } from 'src/app/_core/services/api.service';
import { Globals } from 'src/app/_shared/helpers/models/globals';

@Component({
  selector: 'app-foods-list',
  templateUrl: './foods-list.component.html',
  styleUrls: ['./foods-list.component.scss'],
})
export class FoodsListComponent implements OnInit {
  foodCategories: Category[] = [];
  foods: Food[] = [];
  categoryId: number = 0;
  isLoadingCategory: boolean = true;
  isLoadingFood: boolean = true;
  foodReadySubscription: Subscription = new Subscription();
  source = interval(5000);
  constructor(public globals: Globals, public apiService: ApiService) {}

  ngOnInit() {
    //this.getCountFoodsReady();
    this.getAllFoodsByCategory();
  }

  public onLoadFoodById($event: any) {
    this.categoryId = $event;
    this.getFoodsByCategoryId(this.categoryId);
  }

  public getCountFoodsReady() {
    this.foodReadySubscription = this.source.subscribe(() =>
      this.apiService.fetchCountPlats()
    );
  }

  public getAllFoodsByCategory() {
    this.apiService.fetchFoodsByCategory().subscribe(
      (data) => {
        this.foodCategories = data;
        this.isLoadingCategory = false;
      },
      (err) => {
        return throwError(err);
      }
    );
  }

  public getFoodsByCategoryId(id: number) {
    this.apiService.fetchFoodsByCategoryId(id).subscribe(
      (data) => {
        this.foods = data;
        this.isLoadingFood = false;
      },
      (err) => {
        return throwError(err);
      }
    );
  }
}
