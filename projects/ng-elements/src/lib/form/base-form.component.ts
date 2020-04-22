import { FormGroup } from '@angular/forms';

export class BaseFormComponent {

  public form: FormGroup;
  public isSubmitted: boolean = false;

  public hasError(controlName: string): boolean {
    return this.isSubmitted && this.form.get(controlName).errors != null;
  }

  public formHasError(errorName: string): boolean {
    return this.isSubmitted && this.form.hasError(errorName);
  }

  public submit(): void {
    this.isSubmitted = true;
  }
}
