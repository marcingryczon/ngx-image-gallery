import { Component, Input, OnInit } from '@angular/core';
import { NgxImage } from '../../image.interface';

@Component({
  selector: 'ngx-image-gallery-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent implements OnInit {
  @Input() image!: NgxImage;

  constructor() {}

  ngOnInit(): void {}
}
