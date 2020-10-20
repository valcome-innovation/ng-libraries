import { TestBed } from '@angular/core/testing';
import { DynamicModalService } from './dynamic-modal.service';
import { ModalModule } from '../modal.module';
import { SimpleModalComponent } from '../components/simple-modal/simple-modal.component';

describe('DynamicModalService', () => {

  let service: DynamicModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalModule],
      providers: [DynamicModalService]
    });
    service = TestBed.inject(DynamicModalService);
  });

  it('should inject service', () => {
    expect(service).toBeTruthy();
  });

  it('should show modal and hide on click', async () => {
    let resolved = false;
    const result: Promise<any> = service.showModal(SimpleModalComponent);
    document.querySelector('button.btn-close')?.dispatchEvent(new MouseEvent('click'));
    await result.then(() => resolved = true);
    expect(resolved).toBeTrue();
  });
});
