import { FormControl, FormGroup } from '@angular/forms';
import { FormHelper } from './form.helper';

describe('FormHelper', () => {
  it('should get form name', () => {
    let form = getTestForm();

    let name: string = FormHelper.getControlName(form.get('address'));

    expect(name).toEqual('address');
  });

  it('should return empty string if no name', () => {
    let form = getTestForm();

    let name: string = FormHelper.getControlName(form);

    expect(name).toEqual('');
  });

  function getTestForm(): FormGroup {
    return new FormGroup({
      address: new FormControl('')
    });
  }
});
