import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';

@Injectable()
export class OrderService {
  orders: Order[] = [];
  constructor(private http: HttpClient) {}

  public getOrdersByUserEmail(userEmail: string): Observable<Order[]> {
    const path = `${environment.HEADLESS_CMS_URL}/carts/?filter[userEmail]=${userEmail}`;
    return this.http.get<Order[]>(path).pipe(map((item: any) => item.data));
  }

  public getStreamOfOrdersByUserEmail(userEmail: string): void {
    const path = `${environment.HEADLESS_CMS_URL}/carts/?filter[userEmail]=${userEmail}`;
    this.http
      .get<Order[]>(path)
      .pipe(map((item: any) => item.data))
      .subscribe((items) => {
        this.orders.push(items);
      });
  }
}
