import { AbstractControl } from '@angular/forms';

export class FormHelper {
  public static getControlName(c: AbstractControl): string | null {
    if (c.parent != null) {
      const formGroup = c.parent.controls;
      return Object.keys(formGroup).find(name => c === formGroup[name]);
    } else {
      return '';
    }
  }
}
