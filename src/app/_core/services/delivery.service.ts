import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Delivery } from '../models/delivery.model';
import { DeliveryCategory } from '../models/deliveryCategory.model';

@Injectable()
export class DeliveryService {
  constructor(private http: HttpClient) {}

  public fetchDeliveryCategory(): Observable<DeliveryCategory[]> {
    const path = `${environment.HEADLESS_CMS_URL}/category_delivery`;
    return this.http
      .get<DeliveryCategory[]>(path)
      .pipe(map((item: any) => item.data));
  }

  public fetchDeliveryByCategoryId(id: number): Observable<Delivery[]> {
    const path = `${environment.HEADLESS_CMS_URL}/deliverys?filter[category]=${id}`;
    return this.http.get<Delivery[]>(path).pipe(map((item: any) => item.data));
  }

  public fetchDeliveryById(id: number): Observable<Delivery[]> {
    const path = `${environment.HEADLESS_CMS_URL}/deliverys?filter[id]=${id}`;
    return this.http.get<Delivery[]>(path).pipe(map((item: any) => item.data));
  }

  public fetchCityDelivery(): Observable<any[]> {
    const path = `${environment.HEADLESS_CMS_URL}/deliverys?fields=city`;
    return this.http.get<any[]>(path).pipe(map((item: any) => item.data));
  }
}
