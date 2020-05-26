import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DisplayValue } from 'ng-core';
import { FormErrorType } from 'ng-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public FormErrorType = FormErrorType;

  public shippingForm: FormGroup;
  public isSubmitted: boolean = false;

  public countries: DisplayValue[] = [
    { display: 'Österreich', value: 'AT' },
    { display: 'Deutschland', value: 'DE' },
    { display: 'United Kingdom', value: 'UK' }
  ];

  public beers: DisplayValue[] = [
    { display: 'Schwechater', value: 0 },
    { display: 'Ottakringer', value: 1 },
    { display: 'Wieselburger', value: 2 }
  ];

  public constructor(private fb: FormBuilder) {
    this.initForm();
  }

  private initForm(): void {
    this.shippingForm = this.fb.group({
      eMail: ['', this.fbOptions([Validators.required])],
      firstName: ['', this.fbOptions([Validators.required])],
      lastName: ['', this.fbOptions([Validators.required])],
      country: [null, this.fbOptions([Validators.required], 'change')],
      useDifferentBilling: [false, this.fbOptions([Validators.requiredTrue], 'change')],
      beer: [1, this.fbOptions([Validators.required], 'change')]
    });
  }

  private fbOptions(validators: ValidatorFn[], updateOn: 'blur' | 'change' = 'blur'): AbstractControlOptions {
    return { validators, updateOn };
  }

  public submit(event: Event): void {
    this.isSubmitted = true;
    this.shippingForm.markAllAsTouched();

    if (this.shippingForm.valid) {

    } else {
      event.preventDefault();
    }
  }
}
