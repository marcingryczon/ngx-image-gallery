import { NgxImageGalleryService } from './ngx-image-gallery.service';
import { TestBed } from '@angular/core/testing';

describe('NgxImageGalleryServiceService', () => {
  let service: NgxImageGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImageGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
