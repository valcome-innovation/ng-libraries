import { BaseFormComponent } from './base-form.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

describe('BaseFormComp', () => {

  let component: BaseFormComponent;

  beforeEach(() => {
    component = new BaseFormComponent();
    component.form = new FormGroup({value: new FormControl('', Validators.required)});
  })

  it('should detect error in form', () => {
    expect(component.hasError('value')).toBeFalsy();
    component.submit();
    expect(component.hasError('value')).toBeTruthy();
  });

  it('should detect required error in form', () => {
    component.submit();
    expect(component.formHasError('passwordMatch')).toBeFalsy();
  });
})
