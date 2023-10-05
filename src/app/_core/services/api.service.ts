import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Category } from '../models/catogory.model';
import { IFood } from '../models/food.interface';
import { Food } from '../models/food.model';
import { FoodCarts } from '../models/foodCarts.model';
import { FoodCheckout } from '../models/foodCheckout.model';
import { Hero } from '../models/hero.model';
import { Restaurants } from '../models/restaurants.model';
import { User } from '../models/user.model';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  foods: IFood[] = [];
  public fetchCountPlats(): void {
    const path = `${environment.BASE_URL}/counts`;
    this.http.get<any>(path).subscribe((items) => (this.foods = items));
  }

  public fetchHero(): Observable<Hero[]> {
    const path = `${environment.HEADLESS_CMS_URL}/hero_page`;
    return this.http.get<Hero[]>(path).pipe(
      map((item: any) => item.data)
    );
  }

  public fetchCategories(): Observable<Category[]> {
    const path = `${environment.HEADLESS_CMS_URL}/category_restaurants`;
    return this.http.get<Category[]>(path).pipe(map((item: any) => item.data));
  }

  public fetchRestaurantsByCatogory(
    category: number
  ): Observable<Restaurants.Resto[]> {
    const path = `${environment.HEADLESS_CMS_URL}/restaurants?filter[category]=${category}`;
    return this.http
      .get<Restaurants.Resto[]>(path)
      .pipe(map((item: any) => item.data));
  }

  public fetchRestaurants(): Observable<Restaurants.Resto[]> {
    const path = `${environment.HEADLESS_CMS_URL}/restaurants`;
    return this.http
      .get<Restaurants.Resto[]>(path)
      .pipe(map((item: any) => item.data));
  }

  public fetchRestaurantsById(id: number): Observable<Restaurants.Resto> {
    const path = `${environment.HEADLESS_CMS_URL}/restaurants?filter[id]=${id}`;
    return this.http
      .get<Restaurants.Resto>(path)
      .pipe(map((item: any) => item.data));
  }

  public fetchFoodsByCategory(): Observable<Category[]> {
    const path = `${environment.HEADLESS_CMS_URL}/category_foods`;
    return this.http.get<Category[]>(path).pipe(map((item: any) => item.data));
  }

  public fetchFoodsByCategoryId(category_id: number): Observable<Food[]> {
    const path = `${environment.HEADLESS_CMS_URL}/foods?filter[category_id]=${category_id}`;
    return this.http.get<Food[]>(path).pipe(map((item: any) => item.data));
  }

  public fetchFoodsById(food_id: number): Observable<Food[]> {
    const path = `${environment.HEADLESS_CMS_URL}/foods?filter[id]=${food_id}`;
    return this.http.get<Food[]>(path).pipe(map((item: any) => item.data));
  }

  public saveFoodsCarts(foodCart: FoodCarts): Observable<FoodCheckout> {
    const path = `${environment.HEADLESS_CMS_URL}/carts`;
    return this.http.post<FoodCarts>(path, foodCart);
  }

  public saveCartWithUserAuth(user: User): Observable<any> {
    const path = `${environment.HEADLESS_CMS_URL}/users`;
    let response = this.http.post<User>(path, user);
    return forkJoin({ response });
  }
}
