import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormErrorMessageDirective } from './form-error-message.directive';
import { Component, DebugElement } from '@angular/core';
import { FormErrorType } from '../../model/form-error-type';
import { By } from '@angular/platform-browser';

@Component({
  template: `<span val-input-error-message [errorType]="FormErrorType.REQUIRED">Field is required</span>`
})
class FormErrorMessageTestComponent {
  public FormErrorType = FormErrorType;
}


describe('FormErrorMessageDirective', () => {

  let component: FormErrorMessageTestComponent;
  let fixture: ComponentFixture<FormErrorMessageTestComponent>;
  let directiveElement: DebugElement;
  let directive: FormErrorMessageDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormErrorMessageDirective,
        FormErrorMessageTestComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormErrorMessageTestComponent);
    component = fixture.componentInstance;

    directiveElement = fixture.debugElement.query(By.directive(FormErrorMessageDirective))
    directive = directiveElement.injector.get(FormErrorMessageDirective);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeDefined();
    expect(directive).toBeDefined();
  });

  it('should hide message', () => {
    directive.hideError();

    expect(directiveElement.nativeElement.style.display).toEqual('none');
  });

  it('should show message', async () => {
    directive.showError();

    expect(directiveElement.nativeElement.style.display).toEqual('block');
    expect(directiveElement.nativeElement.getAttribute('data-cy')).toEqual(directive.errorType);
  });

  it('should be able to be displayed alternating', () => {
    directive.showError();
    expect(directiveElement.nativeElement.style.display).toEqual('block');

    directive.hideError();
    expect(directiveElement.nativeElement.style.display).toEqual('none');

    directive.showError();
    expect(directiveElement.nativeElement.style.display).toEqual('block');
  });
});
