import { TestBed, waitForAsync } from '@angular/core/testing';
import { ImageExifService } from './image-exif.service';
import { ImageResizeModule } from './image-resize.module';

describe('ImageExifService', () => {

  let service: ImageExifService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ImageResizeModule
      ]
    });

    service = TestBed.inject(ImageExifService);
  }));

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
