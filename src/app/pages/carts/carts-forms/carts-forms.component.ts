import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { FoodCarts } from 'src/app/_core/models/foodCarts.model';
import { Geo, User } from 'src/app/_core/models/user.model';
import { ApiService } from 'src/app/_core/services/api.service';
import { FoodService } from 'src/app/_core/services/food.service';
import { UserService } from 'src/app/_core/services/user.service';
import { OrderStatusEnum } from 'src/app/_shared/helpers/enums/orderStatus.enum';
import { EventBusService } from 'src/app/_shared/helpers/eventBus/event-bus.service';
import { Globals } from 'src/app/_shared/helpers/models/globals';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carts-forms',
  templateUrl: './carts-forms.component.html',
  styleUrls: ['./carts-forms.component.scss'],
})
export class CartsFormsComponent implements OnInit {
  @Input() foodsCarts: any = [];

  carts: FoodCarts = new FoodCarts();
  geoLocation: Geo = new Geo();

  registerForm!: FormGroup;
  submitted = false;
  locatted = false;
  constructor(
    private formBuilder: FormBuilder,
    public globals: Globals,
    private apiService: ApiService,
    private userService: UserService,
    private foodService: FoodService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/
          ),
        ],
      ],
      city: ['', Validators.required],
      acceptTermsGeo: [false, Validators.requiredTrue],
    });
  }
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.locatted === false) {
      Swal.fire('', `📍 Autoriser svp votre position`, 'error');
      return;
    }
    const user = this.createUser();
    this.apiService.saveCartWithUserAuth(user).subscribe((data) => {
      this.carts.userId = data.response.data.id;
      this.carts.userEmail = data.response.data.email;
      this.carts.status = OrderStatusEnum.STATUS_INPROGRESS;
      this.carts.dateCreated = new Date();
      this.carts.foods = this.foodsCarts;
      this.apiService.saveFoodsCarts(this.carts).subscribe(
        () => {
          Swal.fire('😄', `votre commander est envoyer`, 'success');
          this.cleanFoodCarts();
          this.userService.setCurrentUser(user);
        },
        (err) => {
          return throwError(err);
        }
      );
    });
  }

  onCheckGeoLocalisation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let myPosition = position.coords;
          this.geoLocation.lat = myPosition.latitude;
          this.geoLocation.lng = myPosition.longitude;
          this.locatted = true;
        },
        (error) => {
          if (error.code == error.PERMISSION_DENIED) {
            Swal.fire('', `📍 Autoriser svp votre position`, 'error');
          }
        }
      );
    }
  }

  cleanFoodCarts() {
    this.foodService.removeAllFoodFromLocalStorage();
  }

  private createUser() {
    return new User(
      this.registerForm.value.firstName,
      this.registerForm.value.lastName,
      this.registerForm.value.phone,
      this.registerForm.value.email,
      this.registerForm.value.adresse,
      this.registerForm.value.city,
      this.geoLocation
    );
  }
}
