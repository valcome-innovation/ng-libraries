import { BaseGenericFieldComponent } from './base-generic-field.component';
import { Subject } from 'rxjs';
import { FormErrorType } from '../model/form-error-type';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import createSpy = jasmine.createSpy;

describe('BaseGenericFieldComponent', () => {

  let component: BaseGenericFieldComponent;
  let statusChange = new Subject<void>();

  let formControlSpy: any = {
    statusChanges: statusChange.asObservable(),
    hasError: createSpy('hasError').and.returnValue(false),
    valid: false
  };

  beforeEach(() => {
    component = new BaseGenericFieldComponent();
    component.formName = 'field';
    component.form = getMockedFormGroup();
    component.errorMessages = [] as any;
  });

  afterEach(() => {
    component.ngOnDestroy();
  })

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should init with id and formControl', () => {
    component.ngOnInit();
    expect(component.id).toEqual('fieldInput');
    expect(component.isValid).toBeTruthy();
  });

  it('should validate form if submitted', () => {
    formControlSpy.valid = true;
    component.ngOnInit();

    component.ngOnChanges({ isFormSubmitted: { currentValue: true } } as any);

    expect(component.isValid).toBeTruthy();
  });

  it('should listen on changes and validate control', () => {
    formControlSpy.valid = true;
    component.ngOnInit();

    statusChange.next();

    expect(component.isValid).toBeTruthy();
  });

  it('should display and show error messages accordingly', () => {
    let showMessageSpy = createSpy('showMessage');
    let hideMessageSpy = createSpy('hideMessage');
    component.errorMessages = getMockedErrorMessages(showMessageSpy, hideMessageSpy);
    formControlSpy.hasError.withArgs(FormErrorType.MAX_LENGTH).and.returnValue(true);
    component.ngOnInit();

    statusChange.next();

    expect(showMessageSpy).toHaveBeenCalledTimes(1);
    expect(hideMessageSpy).toHaveBeenCalledTimes(2);
  });

  it('should generate valid id with parent form', () => {
    let form: UntypedFormGroup = new UntypedFormGroup({
      shipping: new UntypedFormGroup({
        firstName: new UntypedFormControl('')
      })
    })
    component.form = form.get('shipping') as UntypedFormGroup;
    component.formName = 'firstName';

    component.ngOnInit();

    expect(component.id).toEqual('shipping_firstNameInput');
  });

  function getMockedFormGroup(): any {
    return {
      get: () => formControlSpy
    }
  }

  function getMockedErrorMessages(showMessageSpy: jasmine.Spy, hideMessageSpy: jasmine.Spy): any {
    return [
      { errorType: FormErrorType.REQUIRED, hideError: hideMessageSpy, showError: showMessageSpy },
      { errorType: FormErrorType.MAX_LENGTH, hideError: hideMessageSpy, showError: showMessageSpy },
      { errorType: FormErrorType.PATTERN, hideError: hideMessageSpy, showError: showMessageSpy }
    ];
  }
});
