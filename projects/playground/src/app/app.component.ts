import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DisplayValue } from 'ng-core';
import { FormErrorType } from 'projects/ng-elements/src/lib/form/model/form-error-type';
import { Image } from '../../../ng-elements/src/lib/form/model/image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public lessImages: Image[] = [
    {
      url: 'https://weinfreunde.de/magazin/wp-content/uploads/2018/12/1-1-Bild_1500x800px_4-1.jpg',
      alt: '',
      sortOrder: 1
    },
    {
      url: 'https://www.falstaff.at/fileadmin/_processed_/b/1/csm_Wein-c-Shutterstock-2640_a451dbe1fa.jpg',
      alt: '',
      sortOrder: 2
    }
  ];

  public images: Image[] = [
    {
      url: 'https://weinfreunde.de/magazin/wp-content/uploads/2018/12/1-1-Bild_1500x800px_4-1.jpg',
      alt: '',
      sortOrder: 1
    },
    {
      url: 'https://www.falstaff.at/fileadmin/_processed_/b/1/csm_Wein-c-Shutterstock-2640_a451dbe1fa.jpg',
      alt: '',
      sortOrder: 2
    },
    {
      url: 'https://weinfreunde.de/magazin/wp-content/uploads/2018/12/1-1-Bild_1500x800px_4-1.jpg',
      alt: '',
      sortOrder: 3
    },
    {
      url: 'https://www.falstaff.at/fileadmin/_processed_/b/1/csm_Wein-c-Shutterstock-2640_a451dbe1fa.jpg',
      alt: '',
      sortOrder: 4
    },
    {
      url: 'https://weinfreunde.de/magazin/wp-content/uploads/2018/12/1-1-Bild_1500x800px_4-1.jpg',
      alt: '',
      sortOrder: 5
    },
    {
      url: 'https://www.falstaff.at/fileadmin/_processed_/b/1/csm_Wein-c-Shutterstock-2640_a451dbe1fa.jpg',
      alt: '',
      sortOrder: 6
    }
  ];

  public priceRange: [number, number] = [0, 0];

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

  public ngOnInit(): void {
    let control = this.shippingForm.get('country');
    control.statusChanges.subscribe((s) => console.log(s));
  }

  private initForm(): void {
    this.shippingForm = this.fb.group({
      eMail: ['', this.fbOptions([Validators.required])],
      firstName: ['', this.fbOptions([Validators.required])],
      lastName: ['', this.fbOptions([Validators.required])],
      country: [null, this.fbOptions([Validators.required, Validators.email], 'change')],
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

  public setError(): void {
    let control = this.shippingForm.get('country');
    control.setErrors({ server: true });
  }
}
