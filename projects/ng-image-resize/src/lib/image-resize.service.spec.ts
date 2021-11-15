import { TestBed, waitForAsync } from '@angular/core/testing';
import { ImageResizeService } from './image-resize.service';
import { ImageResizeModule } from './image-resize.module';

describe('ImageResizeService', () => {

  let service: ImageResizeService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ImageResizeModule
      ]
    });

    service = TestBed.inject(ImageResizeService);
  }));

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
