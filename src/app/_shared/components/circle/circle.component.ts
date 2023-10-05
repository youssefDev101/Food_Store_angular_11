import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
})
export class CircleComponent implements OnInit {
   @Input() backgroundColor: string = '';
   @Input() width: string = '';
   @Input() height: string = '';
   @Input() top: string = '';
   @Input() right: string = '';

  constructor() {}

  ngOnInit() {}

  getClassName(){
    let circleClassName =`background-color: red;border: none;border-radius: 50%;width: ${this.width};height: ${this.height};z-index: 999;opacity: 0.5;position: absolute;top: ${this.top};right: ${this.right}`;
    return circleClassName;
  }
}
