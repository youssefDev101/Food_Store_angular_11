import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  circle_styling = {
    backgroundColor: 'var(--red)',
    width: '22rem',
    height: '22rem',
    top: '-10%',
    right: '-10%',
  };

  constructor() {}

  ngOnInit() {}
}
