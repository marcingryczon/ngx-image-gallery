import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDialogHeaderComponent } from './preview-dialog-header.component';

describe('PreviewDialogHeaderComponent', () => {
  let component: PreviewDialogHeaderComponent;
  let fixture: ComponentFixture<PreviewDialogHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewDialogHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDialogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
