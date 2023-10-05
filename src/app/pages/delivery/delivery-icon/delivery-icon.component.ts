import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DeliveryCategory } from 'src/app/_core/models/deliveryCategory.model';

let oldCategoryId = 0;

@Component({
  selector: 'app-delivery-icon',
  templateUrl: './delivery-icon.component.html',
  styleUrls: ['./delivery-icon.component.scss'],
})
export class DeliveryIconComponent implements OnInit {
  @Input() deliveryCategory: DeliveryCategory = new DeliveryCategory();
  @Output() categoryId = new EventEmitter<number>();
  @ViewChild('deliveryCategoryDiv') deliveryCategoryDiv!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  onDeliveryCategoryId(newCategoryId: number): void {
    this.categoryId.emit(newCategoryId);

    const newCategory: HTMLElement | any = document.getElementById(
      String(newCategoryId)
    );
    const oldCategory: HTMLElement | any = document.getElementById(
      String(oldCategoryId)
    );

    if (oldCategory !== null) {
      oldCategory.classList.add('delivery-card-color');
      oldCategory.classList.remove('delivery-card-color-active');
    }

    newCategory.classList.remove('delivery-card-color');
    newCategory.classList.add('delivery-card-color-active');
    oldCategoryId = newCategoryId;
  }
}
