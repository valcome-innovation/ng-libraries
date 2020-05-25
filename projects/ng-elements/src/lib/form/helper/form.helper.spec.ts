import { FormHelper } from './form.helper';
import { TestBed } from '@angular/core/testing';
import { GenericFormsModule } from '../generic-forms.module';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

describe('FormHelper', () => {

  let helper: FormHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GenericFormsModule]
    }).compileComponents();

    helper = TestBed.inject(FormHelper);
  });

  it('should create', () => {
    expect(helper).toBeDefined();
  });

  it('should touch every form control', () => {
    let formGroup: FormGroup = getTestFormGroup();

    helper.touchAllFormFields(formGroup);

    expect(formGroup.get('field').touched).toBeTruthy();
    expect(formGroup.get('innerGroup').get('innerField').touched).toBeTruthy();

    let formArray: FormArray = formGroup.get('fieldArray') as FormArray;
    expect(formArray.controls.every(c => c.touched)).toBeTruthy();
  });

  function getTestFormGroup(): FormGroup {
    return new FormGroup({
      field: new FormControl(''),
      innerGroup: new FormGroup({
        innerField: new FormControl('')
      }),
      fieldArray: new FormArray([
        new FormControl(''),
        new FormControl('')
      ])
    })
  }
});
