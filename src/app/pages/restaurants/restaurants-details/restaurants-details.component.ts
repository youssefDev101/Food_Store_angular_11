import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { ImageModal } from 'src/app/_core/models/imageModal.model';
import { Restaurant } from 'src/app/_core/models/restaurant.model';
import { ApiService } from 'src/app/_core/services/api.service';
import { CommunService } from 'src/app/_core/services/commun.service';
import { Globals } from 'src/app/_shared/helpers/models/globals';
import { Utils } from 'src/app/_shared/helpers/utils/utils';

//@AutoUnsubscribe()
@Component({
  selector: 'app-restaurants-details',
  templateUrl: './restaurants-details.component.html',
  styleUrls: ['./restaurants-details.component.scss'],
})
export class RestaurantsDetailsComponent implements OnInit, OnDestroy {
  restaurants: Restaurant | any;
  restaurantsSubs: Subscription = new Subscription();
  restaurantId = '';
  isLoading = true;
  image: ImageModal = new ImageModal();
  constructor(
    private apiService: ApiService,
    private communService: CommunService,
    public globals: Globals,
    public utils: Utils
  ) {}

  ngOnInit(): void {
    this.getRestaurantDetails();
    this.getImageModalViewer();
  }

  ngOnDestroy(): void {
    if (this.restaurantsSubs) {
      this.restaurantsSubs.unsubscribe();
    }
  }

  public getImageModalViewer(): void {
    this.communService.getImageModal().subscribe(
      (data) => {
        this.image = data;
      },
      (err) => {
        return throwError(err);
      }
    );
  }

  public getRestaurantId($event: string): void {
    this.restaurantId = $event;
    this.getRestaurantDetails();
  }

  public getRestaurantDetails(): void {
    this.restaurantsSubs = this.apiService
      .fetchRestaurantsById(parseInt(this.restaurantId, 0))
      .subscribe(
        (res: any) => {
          this.restaurants = res[0];
          this.isLoading = false;
        },
        (err) => {
          return throwError(err);
        }
      );
  }

  public onZoomInPicutre(image: any): void {
    const imageSrc = image.srcElement.currentSrc;
    const imageAlt = image.srcElement.alt;
    this.communService.setImageModal({
      modal_img: imageSrc,
      modal_alt: imageAlt,
      modal_show: true,
    });
  }

  public onPhoneCall(phoneNumber: string): void {
    window.location.href = `tel:${phoneNumber}`;
  }
}
