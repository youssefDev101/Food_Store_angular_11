import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/_shared/helpers/models/globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

}
