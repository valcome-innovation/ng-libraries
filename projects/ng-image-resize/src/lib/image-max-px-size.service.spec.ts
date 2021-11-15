import { TestBed, waitForAsync } from '@angular/core/testing';
import { ImageMaxPXSizeService } from './image-max-px-size.service';
import { ImageResizeModule } from './image-resize.module';

describe('ImageMaxPXSizeService', () => {

  let service: ImageMaxPXSizeService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ImageResizeModule
      ]
    });

    service = TestBed.inject(ImageMaxPXSizeService);
  }));

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
