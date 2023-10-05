import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_core/models/catogory.model';
import { ApiService } from 'src/app/_core/services/api.service';
import { CommunService } from 'src/app/_core/services/commun.service';
import { Globals } from 'src/app/_shared/helpers/models/globals';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  //changeDetection :ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent implements OnInit {
  categories: Array<Category> = [];
  isLoading: boolean =true;
  isCategoryModalShowed: boolean | undefined;
  constructor(private apiService: ApiService,private communService:CommunService, public globals: Globals) {}

  ngOnInit() {
    this.getAllCategories();
    this.getCategoryModal();
  }

  public getCategoryModal(){
    this.communService.getCategoryModal().subscribe(
      (data) => {
        this.isCategoryModalShowed =data.modal_show;
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

  public getAllCategories() {
    this.apiService.fetchCategories().subscribe(
      (data) => {
        this.categories = data;
        this.isLoading = false;
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

}
