import { TestBed } from '@angular/core/testing';
import { ToasterService } from './toaster.service';
import { ToasterModule } from './toaster.module';

describe('ToasterService', () => {

  let service: ToasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToasterModule],
      providers: [ToasterService]
    });
    service = TestBed.inject(ToasterService);
  });

  it('should inject service', () => {
    expect(service).toBeTruthy();
  });
});
