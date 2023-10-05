import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class Utils {
  public objectsEqual(o1: object, o2: object): boolean {
    return Object.keys(o1).length === Object.keys(o2).length;
  }

  public convertCentimesToHours(value: number): number {
    if (value) {
      let newValue = (value * 100 * 60) / 100;
      return newValue;
    }
    return 0;
  }
  
  public objectsNotEmpty(obj: object): boolean {
    if (
      obj &&
      Object.keys(obj).length === 0 &&
      Object.getPrototypeOf(obj) === Object.prototype
    ) {
      return false;
    }
    return true;
  }

  public getImageFromFields(image: string) {
    return `${environment.HEADLESS_CMS_ASSETS_URL}/${image}`;
  }
}
