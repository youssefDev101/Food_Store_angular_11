import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EventBusData } from './event-bus-data';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private subject$ = new Subject();
  constructor() {}

  public emit(event: EventBusData) {
    this.subject$.next(event);
  }

  public on(eventName: string, value: any): Subscription {
    return this.subject$
      .pipe(
        filter((e: EventBusData | any) => e.name === eventName),
        map((e: EventBusData) => e.value)
      )
      .subscribe(value);
  }
}
