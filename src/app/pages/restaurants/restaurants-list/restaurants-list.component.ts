import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { CategoryModal } from 'src/app/_core/models/categoryModal.model';
import { Restaurants } from 'src/app/_core/models/restaurants.model';
import { ApiService } from 'src/app/_core/services/api.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss'],
})
export class RestaurantsListComponent implements OnInit, OnDestroy {
  @Input()
  categorie: CategoryModal = new CategoryModal();
  @Output() categorySize = new EventEmitter<number>();

  restaurants: Array<Restaurants.Resto> = [];
  restaurantSubs: Subscription = new Subscription();

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.getRestaurantsByCatogory();
  }

  ngOnDestroy(): void {
    if (this.restaurantSubs) {
      this.restaurantSubs.unsubscribe();
    }
  }

  public onNavigateToFoodDetails(id: number, title: string) {
    this.router.navigate([`/restaurants/`], {
      queryParams: {
        id: `${id}`,
        title: `${title}`,
        firstPage: `home`,
        secondPage: `${this.categorie.modal_title}`,
        timeStep: `${new Date().getTime()}`,
      },
    });
  }

  public getRestaurantsByCatogory() {
    this.restaurantSubs = this.apiService
      .fetchRestaurantsByCatogory(this.categorie.modal_ref || 0)
      .subscribe(
        (data) => {
          this.restaurants = data;
          this.categorySize.emit(data.length);
        },
        (err) => {
          return throwError(err);
        }
      );
  }
}
