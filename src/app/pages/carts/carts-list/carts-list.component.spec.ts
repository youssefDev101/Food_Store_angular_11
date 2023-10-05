/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartsListComponent } from './carts-list.component';

describe('CartsListComponent', () => {
  let component: CartsListComponent;
  let fixture: ComponentFixture<CartsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
