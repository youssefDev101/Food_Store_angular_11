import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrow-back-button',
  templateUrl: './arrow-back-button.component.html',
  styleUrls: ['./arrow-back-button.component.scss'],
})
export class ArrowBackButtonComponent implements OnInit {
  @Input() title = '';
  @Input() link = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public onNavigateTo(): void {
    this.router.navigate([`/${this.link}`]);
  }
}
