import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { User } from 'src/app/_core/models/user.model';
import { FoodService } from 'src/app/_core/services/food.service';
import { UserService } from 'src/app/_core/services/user.service';
import { Globals } from 'src/app/_shared/helpers/models/globals';
import { Utils } from 'src/app/_shared/helpers/utils/utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  foodCartSize = 0;
  currentUser!: User;
  showUserIcon = false;
  constructor(
    private router: Router,
    public globals: Globals,
    private foodService: FoodService,
    private userService: UserService,
    private utils: Utils
  ) {}

  ngOnInit(): void {
    this.getFoodCartFormStorage();
    this.getUserFormStorage();
  }

  public getUserFormStorage(): void {
    this.userService.getCurrentUser().subscribe(
      (data) => {
        this.currentUser = data;
        if (this.utils.objectsNotEmpty(this.currentUser)) {
          this.showUserIcon = true;
        }
      },
      (err) => {
        return throwError(err);
      }
    );
  }

  public getFoodCartFormStorage(): void {
    this.foodService.getFoodFromLocalStorage().subscribe(
      (data) => {
        this.foodCartSize = data?.length;
      },
      (err) => {
        return throwError(err);
      }
    );
  }

  public onNavigateToPage(pageName: string): void {
    switch (pageName) {
      case this.globals.NAV_BAR.HOME_PAGE:
        this.router.navigate(['/home']);
        break;
      case this.globals.NAV_BAR.CONTACT_PAGE:
        this.router.navigate(['/contacts']);
        break;
      case this.globals.NAV_BAR.FOOD_PAGE:
        this.router.navigate(['/foods']);
        break;
      case this.globals.NAV_BAR.CARTS_PAGE:
        this.router.navigate(['/carts']);
        break;
      case this.globals.NAV_BAR.ORDERS_PAGE:
        this.router.navigate(['/orders']);
        break;
      case this.globals.NAV_BAR.DELIVERY_PAGE:
        this.router.navigate(['/delivery']);
        break;

      default:
        this.router.navigate(['/home']);
        break;
    }
  }
  public onLogOut(): void {
    this.userService.setCurrentUser({});
    this.showUserIcon = false;
    this.router.navigate(['/home']);
  }
}
