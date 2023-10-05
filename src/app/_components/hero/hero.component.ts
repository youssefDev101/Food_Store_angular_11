import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Hero } from 'src/app/_core/models/hero.model';
import { ApiService } from 'src/app/_core/services/api.service';
import { Globals } from 'src/app/_shared/helpers/models/globals';
import { Utils } from 'src/app/_shared/helpers/utils/utils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  heros: Hero = new Hero();
  isLoading: Boolean = true;
  color: string = 'blue';
  width: string = 'blue';
  height: string = 'blue';
  top: string = 'blue';
  right: string = 'blue';
  constructor(
    private apiService: ApiService,
    public globals: Globals,
    private utils :Utils,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllHeros();
  }
  public onNavigateToFoods() {
    this.router.navigate(['/foods']);
  }

  public getAllHeros() {
    this.apiService.fetchHero().subscribe(
      (res) => {
        this.heros = res[0];
        this.isLoading = false;
      },
      (err) => {
        return throwError(err);
      }
    );
  }

  public getHeroImage(image: string) {
    return this.utils.getImageFromFields(image);
  }
}
