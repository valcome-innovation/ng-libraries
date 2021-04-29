import { SimpleModalComponent } from './simple-modal.component';
import { BaseDynamicModalComponent } from '../base-dynamic-modal.component';

describe('SimpleModalComponent', () => {

  let component: SimpleModalComponent;

  beforeEach(() => {
    component = new SimpleModalComponent();
  });

  it('should create component', async () => {
    expect(component).toBeTruthy();
    expect(component).toBeInstanceOf(BaseDynamicModalComponent);
  });

  it('should emit close', () => {
    spyOn(component.modalClose, 'emit');
    component.closeModal();
    expect(component.modalClose.emit).toHaveBeenCalled();
  });

});
