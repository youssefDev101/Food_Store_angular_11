import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, throwError } from 'rxjs';
import { Order } from 'src/app/_core/models/order.model';
import { Geo, User } from 'src/app/_core/models/user.model';
import { OrderService } from 'src/app/_core/services/order.service';
import { UserService } from 'src/app/_core/services/user.service';
import { Globals } from 'src/app/_shared/helpers/models/globals';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit, OnDestroy {
  source = interval(3000);
  isLoading: boolean = true;
  orders: Order[] = [];
  orderSubscription: Subscription = new Subscription();
  currentUser: User = new User('', '', '', '', '', '', new Geo());
  constructor(
    public globals: Globals,
    public orderService: OrderService,
    private userService: UserService
  ) {
    this.userService.getCurrentUser().subscribe((item) => {
      this.currentUser = item;
    });
  }

  ngOnInit() {
    this.orderService
      .getOrdersByUserEmail(this.currentUser.email || '')
      .subscribe(
        (data) => {
          this.orders = data;
          this.isLoading = false;
        },
        (err) => {
          return throwError(err);
        }
      );
  }

  ngOnDestroy(): void {
    this.orderSubscription.unsubscribe();
  }
}
