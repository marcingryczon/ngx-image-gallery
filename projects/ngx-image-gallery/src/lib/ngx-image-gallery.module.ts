import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { NgxImageGalleryComponent } from './ngx-image-gallery.component';
import { PreviewDialogComponent } from './preview-dialog/preview-dialog.component';
import { PreviewDialogHeaderComponent } from './preview-dialog/preview-dialog-header/preview-dialog-header.component';
import { ThumbnailComponent } from './thumbnails/thumbnail/thumbnail.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';

@NgModule({
  declarations: [
    NgxImageGalleryComponent,
    PreviewDialogComponent,
    PreviewDialogHeaderComponent,
    ThumbnailsComponent,
    ThumbnailComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [NgxImageGalleryComponent],
})
export class NgxImageGalleryModule {}
