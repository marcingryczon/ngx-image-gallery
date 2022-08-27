import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgxImage } from '../image.interface';
import { PreviewDialogComponent } from '../preview-dialog/preview-dialog.component';

@Component({
  selector: 'ngx-image-gallery-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss'],
})
export class ThumbnailsComponent {
  @Input() images: NgxImage[] = [];
  @Input() dialogThumbnails = false;
  @Input() header = true;
  private dialogRef: MatDialogRef<PreviewDialogComponent>;
  private animationDuration = '100ms';

  constructor(private dialog: MatDialog) {}

  imageTrackBy(index: number, image: NgxImage): string {
    return image.src;
  }

  openPreview(image: NgxImage, currentImageIndex: number): void {
    if (this.dialog.openDialogs.length === 1) {
      this.animationDuration = '0ms';
      this.dialog.openDialogs[0].close();
      this.openDialog(image, currentImageIndex)
    } else {
      this.openDialog(image, currentImageIndex)
    }
  }
  openDialog(image: NgxImage, currentImageIndex: number): void {
    this.dialogRef = this.dialog.open(PreviewDialogComponent, {
      autoFocus: false,
      hasBackdrop: true,
      disableClose: this.header,
      maxWidth: '80%',
      enterAnimationDuration: this.animationDuration,
      data: {
        image,
        images: this.images,
        currentImageIndex: currentImageIndex,
        imagesCount: this.images.length,
        header: this.header,
      },
    });
    this.dialogRef.afterClosed().subscribe(() => {
      this.animationDuration = '100ms';
    });
  }
}
