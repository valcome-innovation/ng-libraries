import { BaseFormComponent } from './base-form.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('BaseFormComponent', () => {

  let component: BaseFormComponent;

  beforeEach(() => {
    component = new BaseFormComponent();
    component.form = new FormGroup({
      field: new FormControl('')
    });
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should reset submission', () => {
    component.isSubmitted = true;

    component.resetSubmission();

    expect(component.isSubmitted).toBeFalsy();
  });

  it('should mark form as touched and submitted after submitting', () => {
    component.submit(getMockedSubmitEvent());

    expect(component.isSubmitted).toBeTruthy();
    expect(component.form.touched).toBeTruthy();
  });

  it('should resolve submitted true if valid', async () => {
    spyOn(component, 'isFormValid').and.returnValue(true);

    let result: boolean = await component.submit(getMockedSubmitEvent());

    expect(result).toBeTruthy();
  });

  it('should resolve submitted false if invalid', async () => {
    spyOn(component, 'isFormValid').and.returnValue(false);

    let result: boolean = await component.submit(getMockedSubmitEvent());

    expect(result).toBeFalsy();
  });

  function getMockedSubmitEvent(): any {
    return {
      preventDefault: () => {
      }
    };
  }
})
