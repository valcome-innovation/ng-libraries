import { FormGroup } from '@angular/forms';

export class BaseFormComponent {

  public form: FormGroup;
  public isSubmitted: boolean = false;

  public hasError(formName: string): boolean {
    return this.isSubmitted && this.form.get(formName).errors != null;
  }

  public formHasError(errorName: string): boolean {
    return this.isSubmitted && this.form.hasError(errorName);
  }
}
