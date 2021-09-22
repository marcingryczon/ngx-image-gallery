import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxImageGalleryComponent } from './ngx-image-gallery.component';
import { PreviewDialogComponent } from './preview-dialog/preview-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    NgxImageGalleryComponent,
    PreviewDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    NgxImageGalleryComponent
  ]
})
export class NgxImageGalleryModule { }
