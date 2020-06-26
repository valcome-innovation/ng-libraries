import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageGalleryComponent } from './image-gallery.component';
import { UniversalModule } from '../../../../ng-core/src/lib/universal/universal.module';

describe('ProductImageGalleryComponent', () => {
  let component: ImageGalleryComponent;
  let fixture: ComponentFixture<ImageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UniversalModule],
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
