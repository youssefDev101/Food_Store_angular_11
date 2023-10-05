import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoryModal } from '../models/categoryModal.model';
import { ImageModal } from '../models/imageModal.model';

@Injectable()
export class CommunService {
  private categoryModal$ = new BehaviorSubject<CategoryModal>({ modal_ref:0 ,modal_title: '', modal_show: false});
  private imageModal$ = new BehaviorSubject<ImageModal>({ modal_img: '',modal_alt: '', modal_show: false});
  constructor() {}

  /** getters/setters for showing the category modal */
  getCategoryModal(): Observable<CategoryModal> {
    return this.categoryModal$.asObservable();
  }

  setCategoryModal(object: CategoryModal) {
    this.categoryModal$.next(object);
  }

  /** getters/setters for showing the category modal */
  getImageModal(): Observable<ImageModal> {
    return this.imageModal$.asObservable();
  }

  setImageModal(object: ImageModal) {
    this.imageModal$.next(object);
  }
}
