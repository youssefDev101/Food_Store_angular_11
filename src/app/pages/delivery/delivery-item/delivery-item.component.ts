import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Delivery } from 'src/app/_core/models/delivery.model';
import { Globals } from 'src/app/_shared/helpers/models/globals';
import { Utils } from 'src/app/_shared/helpers/utils/utils';

@Component({
  selector: 'app-delivery-item',
  templateUrl: './delivery-item.component.html',
  styleUrls: ['./delivery-item.component.scss'],
})
export class DeliveryItemComponent implements OnInit {
  @Input() delivery: Delivery = new Delivery();
  constructor(
    public utils: Utils,
    public globals: Globals,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public getImage(image: string): string {
    return this.utils.getImageFromFields(image);
  }

  public onNavigateToDeliveryDetails(id: number): void {
    this.router.navigate([`/delivery/${id}`]);
  }

}
