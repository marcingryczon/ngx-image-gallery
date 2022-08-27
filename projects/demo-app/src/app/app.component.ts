import { Component } from '@angular/core';
import { NgxImage } from 'ngx-image-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images:NgxImage[] = [
    {
      'src': 'https://picsum.photos/id/1/800/600',
      'alt': 'random_image_1',
      'width': 800,
      'height': 600
    },
    {
      'src': 'https://picsum.photos/id/2/1920/1080',
      'alt': 'random_image_2',
      'width': 1920,
      'height': 1080
    },
  ];
}
