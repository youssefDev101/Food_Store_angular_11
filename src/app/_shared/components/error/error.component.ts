import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/_shared/helpers/models/globals';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() redirect: string = '';
  constructor(public globals: Globals, private router: Router) {}

  ngOnInit() {}
  public onNavigateToRedirect() {
    this.router.navigate([`${this.redirect}`]);
  }
}
