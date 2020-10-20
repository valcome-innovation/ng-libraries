import { AfterViewInit, Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WizardStep } from './wizard-step';

@Directive()
export class BaseWizardComponent implements OnInit, AfterViewInit {

  @Input()
  public closeText!: string;

  @Input()
  public steps: WizardStep[] = [];

  @Output()
  public finish: EventEmitter<void> = new EventEmitter<void>();

  public currentStep!: WizardStep;
  private stepIndex = 0;

  public ngOnInit(): void {
    this.setStep(0);
  }

  public ngAfterViewInit(): void {
    this.ngOnInit();
  }

  private updateCurrentStep(): void {
    this.currentStep = this.steps[this.stepIndex];
  }

  public nextStep(): void {
    if (!this.isLastStep()) {
      this.setStep(this.stepIndex + 1);
    }
  }

  public previousStep(): void {
    if (!this.isFirstStep()) {
      this.setStep(this.stepIndex - 1);
    }
  }

  public setStep(index: number): void {
    this.stepIndex = index;
    this.updateCurrentStep();
  }

  public finishWizard(): void {
    this.finish.emit();
  }

  public isFirstStep(): boolean {
    return this.stepIndex === 0;
  }

  public isLastStep(): boolean {
    return this.stepIndex === this.steps.length - 1;
  }
}
