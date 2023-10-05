import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser$ = new BehaviorSubject<User>(
    JSON.parse(localStorage.getItem('cuurent_user') || '{}')
  );

  constructor() {}

  /** getters/setters user */
  getCurrentUser(): Observable<User> {
    return this.currentUser$.asObservable();
  }

  setCurrentUser(obj: User) {
    localStorage.setItem('cuurent_user',JSON.stringify(obj))
    this.currentUser$.next(obj);
  }
}
