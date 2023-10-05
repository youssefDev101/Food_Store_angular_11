import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/_core/models/catogory.model';

let oldCategoryId = 0;

@Component({
  selector: 'app-foods-icon',
  templateUrl: './foods-icon.component.html',
  styleUrls: ['./foods-icon.component.scss'],
})
export class FoodsIconComponent implements OnInit {
  @Input() category: Category = new Category();
  @Output() categoryId = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public onSelectFoodCategory(newCategoryId: number): void {
    this.categoryId.emit(newCategoryId);
    const newFoodIcon: HTMLElement | any = document.getElementById(
      String(newCategoryId)
    );
    const oldFoodIcon: HTMLElement | any = document.getElementById(
      String(oldCategoryId)
    );

    if (oldFoodIcon !== null) {
      oldFoodIcon.classList.add('wrapper-card-color');
      oldFoodIcon.classList.remove('wrapper-card-color-active');
    }

    newFoodIcon.classList.remove('wrapper-card-color');
    newFoodIcon.classList.add('wrapper-card-color-active');
    oldCategoryId = newCategoryId;
  }
}
