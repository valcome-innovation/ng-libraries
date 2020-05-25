import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { GenericFormsModule } from '../generic-forms.module';

@Injectable({ providedIn: GenericFormsModule })
export class FormHelper {

  public touchAllFormFields(formGroup: FormGroup): void {
    if (formGroup != null && formGroup.controls != null) {
      Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
          this.touchAllFormFields(control);
        } else if (control instanceof FormArray) {
          control.controls.forEach((c: FormControl) => c.markAsTouched({ onlySelf: true }));
        }
      });
    }
  }
}
