import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxImage } from '../image.interface';

@Component({
  selector: 'ngx-preview-dialog',
  templateUrl: './preview-dialog.component.html',
  styleUrls: ['./preview-dialog.component.scss'],
})
export class PreviewDialogComponent implements OnInit {
  currentImage: NgxImage;
  currentImageIndex: number;
  header: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      image: NgxImage;
      images: NgxImage[];
      currentImageIndex: number;
      imagesCount: number;
      header: boolean;
    }
  ) {}

  ngOnInit(): void {
    this.currentImage = this.data.image;
    this.currentImageIndex = this.data.currentImageIndex;
    this.header = this.data.header;
  }

  nextImage(currentImageIndex: number): void {
    const index =
      currentImageIndex + 1 === this.data.imagesCount
        ? 0
        : currentImageIndex + 1;
    this.currentImage = this.data.images[index];
    this.currentImageIndex = index;
  }

  prevImage(currentImageIndex: number): void {
    const index =
      currentImageIndex <= 0
        ? this.data.imagesCount - 1
        : currentImageIndex - 1;
    this.currentImage = this.data.images[index];
    this.currentImageIndex = index;
  }
}
