import { Component, Input } from '@angular/core';
import { NgxImage } from '../../image.interface';

@Component({
  selector: 'ngx-image-gallery-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent {
  @Input() image!: NgxImage;

  constructor() {}

}
