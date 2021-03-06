# NgxImageGallery

## Angular 12+ image gallery created with [Angular Material](https://material.angular.io/) components.

## How to use:

Import `NgxImageGalleryModule` in app.module.ts:
```js
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
```html
<div class="container">
  <div class="gallery">
    <ngx-image-gallery [images]=images></ngx-image-gallery>
  </div>
</div>
```

`images` input should contain image src path and alt like this:
```js
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

## Development

Repository contains demo app that can be useful in local lib development.

### How to use local demo app:

Go to `projects/demo-app` and run demo app using `ng serve` command. App will be running at `http://localhost:4200`
## API docs:

### Inputs
Name | Values | Defaut | Description
------------ | ------------- | ------------ | -------------
images | `NgxImage[]` | [] | Array of objects based on `NgxImageInterface`. Every object must contain `src` and `alt` property.
contentAlign | `'center'` \| `'right'` |  | Gallery items can be `centered` or `right` alignment. `Left` alignment is default.
contentDirection | `'row'` \| `'column'` | `'row'` | Gallery should be dispalyed as row or column.

### Interfaces
NgxImage
Property | Type | Description
------------ | ------------- | ------------
src | string | Image url
alt | string | Image alt

## Preview:

### Gallery:
![Gallery](https://raw.githubusercontent.com/marcingryczon/ngx-image-gallery/master/redme-images/readme_img_1.png)

### Gallery item:
![Gallery item](https://raw.githubusercontent.com/marcingryczon/ngx-image-gallery/master/redme-images/readme_img_2.png)

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.
