import { Component, OnInit } from '@angular/core';
import { CategoryModal } from 'src/app/_core/models/categoryModal.model';
import { CommunService } from 'src/app/_core/services/commun.service';
import { Globals } from 'src/app/_shared/helpers/models/globals';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss'],
})
export class CategoryModalComponent implements OnInit {
  category: CategoryModal = new CategoryModal();
  categorySize: any;
  isShowed: boolean = true;
  constructor(public globals: Globals, private commmunService: CommunService) {}

  ngOnInit() {
    this.getCategoryModal();
  }

  public getCategoryModal() {
    this.commmunService.getCategoryModal().subscribe(
      (data) => {
        this.category = data;
      },
      () => {
        Swal.fire(
          '😢',
          `Oups, quelque chose s'est mal passé, veuillez réessayer plus tard`,
          'error'
        );
      }
    );
  }

  public onCategorySize($event: number) {
    this.categorySize = $event;
    if (this.categorySize === 0) {
      this.isShowed = false;
    }
  }
  public onHideTheModal() {
    this.commmunService.setCategoryModal({
      modal_title: '',
      modal_show: false,
    });
  }
}
