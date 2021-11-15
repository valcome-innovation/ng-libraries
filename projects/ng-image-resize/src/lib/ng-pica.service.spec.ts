import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgPicaService } from './ng-pica.service';
import { ImageResizeModule } from './image-resize.module';

describe('NgPicaService', () => {

  let service: NgPicaService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ImageResizeModule
      ]
    });

    service = TestBed.inject(NgPicaService);
  }));

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
