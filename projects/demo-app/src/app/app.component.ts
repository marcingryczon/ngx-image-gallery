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
      'alt': 'random_image_1'
    },
    {
      'src': 'https://picsum.photos/id/2/1920/1080',
      'alt': 'random_image_2'
    },
  ];
}
