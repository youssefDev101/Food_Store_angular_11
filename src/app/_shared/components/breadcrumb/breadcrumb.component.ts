import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunService } from 'src/app/_core/services/commun.service';
import { Globals } from 'src/app/_shared/helpers/models/globals';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  queryParam = {
    id: '',
    title: '',
    firstPage: '',
    secondPage: '',
    timeStep: '',
  };
  @Output() restaurantId = new EventEmitter<string>();
  constructor(
    private router: Router,
    private communService: CommunService,
    public globals: Globals,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getDataFromQueryParam();
  }

  public getDataFromQueryParam(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      (this.queryParam.id = params.id),
        (this.queryParam.title = params.title),
        (this.queryParam.firstPage = params.firstPage),
        (this.queryParam.secondPage = params.secondPage),
        this.restaurantId.emit(this.queryParam.id);
    });
  }

  public onNavigateToPage(pageName: string): void {
    switch (pageName) {
      case this.globals.NAV_BAR.HOME_PAGE:
        this.router.navigate(['/home']);
        this.communService.setCategoryModal({
          modal_ref: 0,
          modal_title: '',
          modal_show: false,
        });
        break;
      case this.globals.NAV_BAR.CATEGORY_PAGE:
        this.router.navigate(['/home']);
        break;
      default:
        this.router.navigate(['/home']);
        break;
    }
  }
}
