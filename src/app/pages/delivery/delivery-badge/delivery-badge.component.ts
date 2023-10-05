import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { throwError } from 'rxjs';
import { Delivery } from 'src/app/_core/models/delivery.model';
import { DeliveryService } from 'src/app/_core/services/delivery.service';
import { Globals } from 'src/app/_shared/helpers/models/globals';

@Component({
  selector: 'app-delivery-badge',
  templateUrl: './delivery-badge.component.html',
  styleUrls: ['./delivery-badge.component.scss'],
})
export class DeliveryBadgeComponent implements OnInit {
  @Output() city = new EventEmitter<string>();
  cities: any[] = [];
  constructor(
    public globals: Globals,
    public deliveryService: DeliveryService
  ) {}

  ngOnInit(): void {
    this.getCityByDelivery();
  }

  getCityByDelivery(): void {
    this.deliveryService.fetchCityDelivery().subscribe(
      (data) => {
        this.cities = data.filter((item) => item.city != null);
      },
      (err) => {
        return throwError(err);
      }
    );
  }

  onByCity(city: string): void {
    this.city.emit(city);
  }

}
