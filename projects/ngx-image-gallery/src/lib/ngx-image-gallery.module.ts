import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxImageGalleryComponent } from './ngx-image-gallery.component';
import { PreviewDialogComponent } from './preview-dialog/preview-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PreviewDialogHeaderComponent } from './preview-dialog/preview-dialog-header/preview-dialog-header.component';

@NgModule({
  declarations: [
    NgxImageGalleryComponent,
    PreviewDialogComponent,
    PreviewDialogHeaderComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    NgxImageGalleryComponent
  ]
})
export class NgxImageGalleryModule {}
