import { Component, OnInit } from '@angular/core';
import { ImageModal } from 'src/app/_core/models/imageModal.model';
import { CommunService } from 'src/app/_core/services/commun.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-image-modal-viewer',
  templateUrl: './image-modal-viewer.component.html',
  styleUrls: ['./image-modal-viewer.component.scss']
})
export class ImageModalViewerComponent implements OnInit {

  image: ImageModal = new ImageModal();
  constructor(private communService: CommunService) {}

  ngOnInit() {
    this.getImageModalViewer();
  }

  public getImageModalViewer() {
    this.communService.getImageModal().subscribe(
      (data) => {
        this.image = data;
        this.onLoadingPicture();
      },
      () => {
        Swal.fire(
          '😢',
          `Oups, quelque chose s'est mal passé, veuillez réessayer plus tard`,
          'error'
        );
      }
    );
  }

  public onLoadingPicture() {
    let modal: HTMLElement | any = document.querySelector('.modal');
    let modalImg: HTMLElement | any = document.querySelector('.modal-content');
    if (modal && modalImg) {
      modal.style.display = 'block';
      modalImg.src = this.image.modal_img;
    }
  }

  public onClosePictureModal() {
    this.communService.setImageModal({
      modal_img: '',
      modal_alt: '',
      modal_show: false,
    });
  }

}
