import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { User } from 'src/app/_core/models/user.model';
import { UserService } from 'src/app/_core/services/user.service';
import { Utils } from '../utils/utils';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  currentUser!: User;
  userSubs: Subscription = new Subscription();
  constructor(private router: Router, private userService: UserService ,private utils :Utils) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.userSubs = this.userService.getCurrentUser().subscribe(
      (data) => {
        this.currentUser = data;
      },
      (err) => {
        return throwError(err);
      }
    );
    if (this.utils.objectsNotEmpty(this.currentUser)) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
