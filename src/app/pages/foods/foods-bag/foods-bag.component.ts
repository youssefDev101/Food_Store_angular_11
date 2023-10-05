import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/_core/models/food.model';
import { FoodService } from 'src/app/_core/services/food.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-foods-bag',
  templateUrl: './foods-bag.component.html',
  styleUrls: ['./foods-bag.component.scss'],
})
export class FoodsBagComponent implements OnInit {
  @Input() food: Food = new Food();
  @Input() btnType = true;
  isAddToCart = false;
  constructor(private foodService: FoodService, private router: Router) {}

  ngOnInit(): void {}

  public onAddToFoodCart(): void {
    const isfoodAdded = this.foodService.saveFoodToLocalStorage(this.food);
    if (typeof isfoodAdded !== 'undefined' && isfoodAdded === true) {
      this.isAddToCart = true;
      Swal.fire('😄', `Plat ajouté au panier avec succès`, 'success').then(
        () => {
          this.router.navigate(['/carts']);
        }
      );
    }
  }
}
