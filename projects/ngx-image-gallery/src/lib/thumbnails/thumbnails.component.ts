import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() selectedImageIndex = new EventEmitter<number>();
  private dialogRef: MatDialogRef<PreviewDialogComponent>;
  private animationDuration = '100ms';

  constructor(private dialog: MatDialog) {}
  imageTrackBy(index: number): string {
    return index.toString();
  }
  
  clickHandler(image: NgxImage, currentImageIndex: number) {
    if (!this.dialogThumbnails) {
      this.openDialog(image, currentImageIndex);
    } else {
      this.selectedImageIndex.next(currentImageIndex);
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
