import { Component, Input, OnInit } from '@angular/core';
import { Restaurants } from 'src/app/_core/models/restaurants.model';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  @Input()
  socialMedia!: Restaurants.SocialMedia;
  constructor() { }

  ngOnInit() {
  }

  public onNavigateToSocialMedia(socialMediaLink :string){
    window.open(`${socialMediaLink}`, '_blank');
  }
}
