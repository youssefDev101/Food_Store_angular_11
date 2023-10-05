import { Component, OnInit, Predicate } from '@angular/core';
import { throwError } from 'rxjs';
import { Delivery } from 'src/app/_core/models/delivery.model';
import { DeliveryCategory } from 'src/app/_core/models/deliveryCategory.model';
import { DeliveryService } from 'src/app/_core/services/delivery.service';
import { Globals } from 'src/app/_shared/helpers/models/globals';

let deliveryOriginalList: any[] = [];

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss'],
})
export class DeliveryListComponent implements OnInit {
  isLoading = true;
  deliveryCategory!: number;
  deliveryCategories: DeliveryCategory[] = [];
  deliverys: Delivery[] = [];
  constructor(
    public globals: Globals,
    public deliveryService: DeliveryService
  ) {}

  ngOnInit(): void {
    this.getAllDeliveryCategory();
  }

  getAllDeliveryCategory(): void {
    this.deliveryService.fetchDeliveryCategory().subscribe(
      (data) => {
        this.deliveryCategories = data;
        this.isLoading = false;
      },
      (err) => {
        return throwError(err);
      }
    );
  }

  getAllDeliveryByCategoryId(id: number): void {
    this.deliveryService.fetchDeliveryByCategoryId(id).subscribe(
      (data) => {
        this.deliverys = data;
        deliveryOriginalList = data;
        this.isLoading = false;
      },
      (err) => {
        return throwError(err);
      }
    );
  }

  onDeliveryCategoryId(event: any): void {
    this.deliveryCategory = event;
    this.getAllDeliveryByCategoryId(this.deliveryCategory);
  }

  onFilterByCity(event: string): void {
    this.deliverys = deliveryOriginalList.filter((item) => item.city === event);
  }
}
