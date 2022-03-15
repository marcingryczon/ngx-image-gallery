import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxImage } from './image.interface';
import { PreviewDialogComponent } from './preview-dialog/preview-dialog.component';

@Component({
  selector: 'ngx-image-gallery',
  templateUrl: './ngx-image-gallery.html',
  styleUrls: ['./ngx-image-gallery.scss'],
})
export class NgxImageGalleryComponent implements OnInit {
  @Input() images: NgxImage[] = [];
  @Input() contentAlign: 'center' | 'right';
  @Input() contentDirection: 'row' | 'column' = 'row';
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
