import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageGalleryComponent } from './image-gallery.component';
import { UniversalModule } from '../../../../ng-core/src/lib/universal/universal.module';
import { RenderService } from '@valcome/ng-core';
import { SkeletonModule } from 'ng-elements';

describe('ProductImageGalleryComponent', () => {
  let component: ImageGalleryComponent;
  let fixture: ComponentFixture<ImageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UniversalModule, SkeletonModule],
      providers: [RenderService],
      declarations: [ImageGalleryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
