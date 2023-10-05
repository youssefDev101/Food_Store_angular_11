import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { Food } from 'src/app/_core/models/food.model';
import { ApiService } from 'src/app/_core/services/api.service';
import { Utils } from 'src/app/_shared/helpers/utils/utils';

@Component({
  selector: 'app-foods-details',
  templateUrl: './foods-details.component.html',
  styleUrls: ['./foods-details.component.scss'],
})
export class FoodsDetailsComponent implements OnInit {
  queryParam = {
    id: '',
    timeStep: '',
    title: '',
  };
  backButton = {
    title: 'revenir sur les plats',
    link: '/foods',
  };
  isLoading = true;
  food: Food = new Food();
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    public utils: Utils
  ) {}

  ngOnInit(): void {
    this.getDataFromQueryParam();
    this.getFoodsById();
  }

  public getDataFromQueryParam(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      (this.queryParam.id = params.id), (this.queryParam.title = params.title);
    });
  }

  public getFoodsById(): void {
    this.apiService.fetchFoodsById(parseInt(this.queryParam.id, 0)).subscribe(
      (res) => {
        this.food = res[0];
        this.isLoading = false;
      },
      (err) => {
        return throwError(err);
      }
    );
  }
}
