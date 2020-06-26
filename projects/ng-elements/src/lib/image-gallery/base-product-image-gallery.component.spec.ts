import { BaseProductImageGalleryComponent } from './base-product-image-gallery.component';
import { Image } from '../form/model/image';
import { TestBed } from '@angular/core/testing';
import { RenderService } from '../../../../ng-core/src/lib/universal/render.service';
import { UniversalModule } from '../../../../ng-core/src/lib/universal/universal.module';

describe('BaseProductImageGalleryComponent', () => {

  let component: BaseProductImageGalleryComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UniversalModule]
    })

    component = new BaseProductImageGalleryComponent(TestBed.inject(RenderService));
    component.images = getTestImages();
  });

  it('should create and initialize with active image', () => {
    component.ngOnChanges(null);

    expect(component.activeImage).toBeDefined();
    expect(component.isFirst).toBeTruthy();
    expect(component.isLast).toBeFalsy();
  });

  it('should should set isLast and isFirst true if only there is only one', () => {
    component.images = [createImage(1)];
    component.ngOnChanges(null);

    expect(component.isFirst).toBeTruthy();
    expect(component.isLast).toBeTruthy();
  });

  it('should select next image', () => {
    component.ngOnChanges(null);
    expect(component.activeImage.sortOrder).toBe(0);

    component.nextImage();
    expect(component.activeImage.sortOrder).toBe(1);
  });

  it('should select prev image', () => {
    component.ngOnChanges(null);
    component.nextImage();
    expect(component.activeImage.sortOrder).toBe(1);

    component.previousImage();
    expect(component.activeImage.sortOrder).toBe(0);
  });

  it('should jumpt to last when calling prev() out of bounds', () => {
    component.ngOnChanges(null);
    expect(component.activeImage.sortOrder).toBe(0);

    component.previousImage();
    expect(component.isLast).toBeTrue();
  });

  it('should jump to first when calling next() out of bounds', () => {
    component.ngOnChanges(null);

    for (let i = 0; i < component.images.length * 2; i++) {
      component.nextImage();
    }

    expect(component.activeImage).toBeDefined();
    expect(component.isLast).toBeFalse();
  });

  it('should throw no errors if empty list is passed', () => {
    component.images = null;

    expect(() => component.ngOnChanges(null)).not.toThrow();
  });

  it('should throw no errors if empty set on empty list is used', () => {
    component.images = null;
    component.ngOnChanges(null);

    expect(() => component.selectImage(createImage(1))).not.toThrow();
  });

  it('should throw no errors if empty image is set', () => {
    component.ngOnChanges(null);
    expect(() => component.selectImage(null)).not.toThrow();
  });
});

function getTestImages(): Image[] {
  return [
    createImage(1),
    createImage(2),
    createImage(3),
    createImage(4),
    createImage(5)
  ];
}

function createImage(position: number): Image {
  return {
    sortOrder: position - 1,
    alt: `image${position}`,
    url: `http://image${position}.png`
  };
}
