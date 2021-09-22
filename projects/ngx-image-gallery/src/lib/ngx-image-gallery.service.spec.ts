import { TestBed } from '@angular/core/testing';

import { NgxImageGalleryService } from './ngx-image-gallery.service';

describe('NgxImageGalleryService', () => {
  let service: NgxImageGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImageGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
