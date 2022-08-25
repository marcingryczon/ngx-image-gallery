import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxImage } from '../image.interface';
import { PreviewDialogComponent } from '../preview-dialog/preview-dialog.component';

@Component({
  selector: 'ngx-image-gallery-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss'],
})
export class ThumbnailsComponent implements OnInit {
  @Input() images: NgxImage[] = [];
  @Input() dialogThumbnails = false;
  @Input() header = true;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  imageTrackBy(index: number, image: NgxImage): string {
    return image.src;
  }

  openPreview(image: NgxImage, currentImageIndex: number): void {
    this.dialog.open(PreviewDialogComponent, {
      autoFocus: false,
      hasBackdrop: true,
      disableClose: this.header,
      maxWidth: '90%',
      data: {
        image,
        images: this.images,
        currentImageIndex: currentImageIndex,
        imagesCount: this.images.length,
        header: this.header,
      },
    });
  }
}
