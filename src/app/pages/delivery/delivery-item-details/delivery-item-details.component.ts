import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Delivery } from 'src/app/_core/models/delivery.model';
import { DeliveryService } from 'src/app/_core/services/delivery.service';

@Component({
  selector: 'app-delivery-item-details',
  templateUrl: './delivery-item-details.component.html',
  styleUrls: ['./delivery-item-details.component.scss'],
})
export class DeliveryItemDetailsComponent implements OnInit {
  constructor(
    private deliveryService: DeliveryService,
    private activatedRoute: ActivatedRoute
  ) {}

  delivery: Delivery = new Delivery();
  isLoading = true;
  deliveryId = 0;
  ngOnInit(): void {
    this.getDeliveryIdFromUrl();
    this.getDeliveryById();
  }

  getDeliveryIdFromUrl(): void {
    this.activatedRoute.params.subscribe((item) => {
      this.deliveryId = item.id;
    });
  }
  getDeliveryById(): void {
    this.deliveryService.fetchDeliveryById(this.deliveryId).subscribe(
      (data) => {
        this.delivery = data[0];
        this.isLoading = false;
      },
      (err) => {
        return throwError(err);
      }
    );
  }
}
