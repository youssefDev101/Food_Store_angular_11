import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/_core/models/catogory.model';
import { CommunService } from 'src/app/_core/services/commun.service';
import { Globals } from 'src/app/_shared/helpers/models/globals';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {
  @Input()
  category: Category = new Category();
  constructor(public globals: Globals, private communService: CommunService) {}

  ngOnInit() {}

  onShowCategoryModal() {
    this.communService.setCategoryModal({
      modal_ref: this.category.id,
      modal_title: this.category.category_title,
      modal_show: true,
    });
  }
}
