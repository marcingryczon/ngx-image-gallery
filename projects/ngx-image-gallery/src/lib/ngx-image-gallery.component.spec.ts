import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageGalleryComponent } from './ngx-image-gallery.component';

describe('NgxImageGalleryComponent', () => {
  let component: NgxImageGalleryComponent;
  let fixture: ComponentFixture<NgxImageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxImageGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
