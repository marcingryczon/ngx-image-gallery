import { Component, Input } from '@angular/core';
import { NgxImage } from './image.interface';
@Component({
  selector: 'ngx-image-gallery',
  templateUrl: './ngx-image-gallery.html',
  styleUrls: ['./ngx-image-gallery.scss'],
})
export class NgxImageGalleryComponent {
  @Input() images: NgxImage[] = [];
  @Input() contentAlign: 'center' | 'right';
  @Input() contentDirection: 'row' | 'column' = 'row';
  @Input() header = true;
}
