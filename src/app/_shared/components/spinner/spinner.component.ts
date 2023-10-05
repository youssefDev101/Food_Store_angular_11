import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `<div class="text-center">
    <div class="spinner-border spinner-custom" role="status"></div>
  </div>`,
  styles: [
    `
      .spinner-custom {
        width: 6rem;
        height: 6rem;
        color: var(--red);
        margin: 3rem auto;
      }
    `,
  ],
})
export class SpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
