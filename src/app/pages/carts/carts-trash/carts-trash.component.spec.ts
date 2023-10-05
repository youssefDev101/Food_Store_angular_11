/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartsTrashComponent } from './carts-trash.component';

describe('CartsTrashComponent', () => {
  let component: CartsTrashComponent;
  let fixture: ComponentFixture<CartsTrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartsTrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartsTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
