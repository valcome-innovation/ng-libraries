import { AbstractControl } from '@angular/forms';

export class FormHelper {
  public static getControlName(c: AbstractControl): string | undefined {
    if (c.parent != null) {
      const formGroup = c.parent.controls as { [p: string]: AbstractControl };
      return Object.keys(formGroup).find(name => c === formGroup[name]);
    } else {
      return '';
    }
  }
}
