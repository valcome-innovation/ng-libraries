import { BaseWizardComponent } from './base-wizard.component';
import { WizardStep } from './wizard-step';

describe('BaseWizardComponent', () => {
  const firstStep: WizardStep = new WizardStep({});
  const middleStep: WizardStep = new WizardStep({});
  const lastStep: WizardStep = new WizardStep({});

  let wizard: BaseWizardComponent;

  beforeEach(() => {
    wizard = new BaseWizardComponent();
  });

  it('should be initialized', () => {
    expect(wizard).toBeTruthy();
  });

  it('should be initialized without steps', () => {
    expect(wizard.steps).toEqual([]);
    expect(wizard.currentStep).toBeFalsy();
  });

  it('should initialize first step on ngOnInit', () => {
    wizard.steps = getSteps();
    wizard.ngOnInit();
    expect(wizard.currentStep).toBe(firstStep);
  });

  it('should initialize first step on ngAfterViewInit', () => {
    wizard.steps = getSteps();
    wizard.ngAfterViewInit();
    expect(wizard.currentStep).toBe(firstStep);
  });

  it('should not go to previous step if on first step', () => {
    wizard.steps = getSteps();

    wizard.ngOnInit();
    expectWizardToBeOnFirstStep();

    wizard.previousStep();
    expectWizardToBeOnFirstStep();
  });

  it('should navigate through steps', () => {
    wizard.steps = getSteps();

    wizard.ngOnInit();
    expectWizardToBeOnFirstStep();

    wizard.nextStep();
    expectWizardToBeOnMiddleStep();

    wizard.nextStep();
    expectWizardToBeOnLastStep();

    wizard.previousStep();
    expectWizardToBeOnMiddleStep();
  });

  it('should jump to step', () => {
    wizard.steps = getSteps();
    wizard.ngOnInit();
    wizard.setStep(2);
    expectWizardToBeOnLastStep();

    wizard.nextStep();
    expectWizardToBeOnLastStep();
  });

  it('should not go further than last step', () => {
    wizard.steps = getSteps();
    wizard.ngOnInit();
    wizard.setStep(2);
    expectWizardToBeOnLastStep();
  });

  it('should emit finish event', () => {
    spyOn(wizard.finish, 'emit');
    wizard.finishWizard();
    expect(wizard.finish.emit).toHaveBeenCalled();
  });

  function expectWizardToBeOnFirstStep(): void {
    expect(wizard.currentStep).toBe(firstStep);
    expect(wizard.isFirstStep()).toBeTrue();
    expect(wizard.isLastStep()).toBeFalse();
  }

  function expectWizardToBeOnMiddleStep(): void {
    expect(wizard.currentStep).toBe(middleStep);
    expect(wizard.isFirstStep()).toBeFalse();
    expect(wizard.isLastStep()).toBeFalse();
  }

  function expectWizardToBeOnLastStep(): void {
    expect(wizard.currentStep).toBe(lastStep);
    expect(wizard.isFirstStep()).toBeFalse();
    expect(wizard.isLastStep()).toBeTrue();
  }

  function getSteps(): WizardStep[] {
    return [firstStep, middleStep, lastStep];
  }
});
