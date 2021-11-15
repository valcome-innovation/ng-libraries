import { TestBed, waitForAsync } from '@angular/core/testing';
import { ImageMaxSizeService } from './image-max-size.service';
import { ImageResizeModule } from './image-resize.module';

describe('ImageMaxSizeService', () => {

  let service: ImageMaxSizeService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ImageResizeModule
      ]
    });

    service = TestBed.inject(ImageMaxSizeService);
  }));

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
