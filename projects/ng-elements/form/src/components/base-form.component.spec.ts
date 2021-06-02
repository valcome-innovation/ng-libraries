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

  it('should resolve submitted true if valid', async () => {
    spyOn(component, 'isFormValid').and.returnValue(true);

    let result: boolean = await component.submit(getMockedSubmitElement(), getMockedSubmitEvent());

    expect(result).toBeTruthy();
  });

  it('should resolve submitted false if invalid', async () => {
    spyOn(component, 'isFormValid').and.returnValue(false);

    let result: boolean = await component.submit(getMockedSubmitElement(), getMockedSubmitEvent());

    expect(result).toBeFalsy();
  });

  function getMockedSubmitElement(): any {
    return { focus: () => 0 }
  }

  function getMockedSubmitEvent(): any {
    return {
      preventDefault: () => {
      }
    };
  }
})
