# NgxImageGallery

## Angular image gallery created with Angular.

## How to use:

Import `NgxImageGalleryModule` in app.module.ts:
```
import { NgxImageGalleryModule } from 'ngx-image-gallery';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    NgxImageGalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Use `<ngx-image-gallery></ngx-image-gallery>` selector in place where gallery must be displayed.
```
<div class="container">
  <div class="gallery">
    <ngx-image-gallery [images]=images></ngx-image-gallery>
  </div>
</div>
```

`images` input should contain image src path and alt like this:
```
  images:NgxImage[] = [
    {
      'src': 'https://picsum.photos/id/1/800/600',
      'alt': 'random_image_1'
    },
    {
      'src': 'https://picsum.photos/id/2/800/600',
      'alt': 'random_image_2'
    },
    ...
  ];
```


This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.
