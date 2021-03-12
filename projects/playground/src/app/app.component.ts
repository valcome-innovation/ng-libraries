import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DisplayValue } from 'ng-core';
import { FormErrorType } from 'projects/ng-elements/src/lib/form/model/form-error-type';
import { Image } from '../../../ng-elements/src/lib/image-gallery/image';
import { HockeyDataGameReport, HockeyDataIceHockeyService, HockeyDataTeamStanding } from 'ts-hockeydata-api';
import { HockeyDataKnockoutStage } from '../../../../dist/ts-hockeydata-api/lib/model/hockeydata-knockout-stage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public gameReport?: HockeyDataGameReport;

  public knockoutStage?: HockeyDataKnockoutStage;

  public standings2?: HockeyDataTeamStanding[];
  public standings3?: HockeyDataTeamStanding[];

  public logos: Record<string, string> = {
    SWL: 'https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/SWL.png',
    ECB: 'https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/ECB.png',
    JES: 'https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/JES.png'
  };

  public homeLogo = 'https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/ECB.png';
  public awayLogo = 'https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/WSV.png';

  public value = new DisplayValue('Yeah', 'Yeah');
  public values = [new DisplayValue('Yeah', 'Yeah'), new DisplayValue('No', 'No')];

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

  public shippingForm!: FormGroup;
  public isSubmitted: boolean = false;

  public countries: DisplayValue<string>[] = [
    new DisplayValue('Österreich', 'AT'),
    new DisplayValue('Deutschland', 'DE', true),
    new DisplayValue('United Kingdom', 'UK')
  ];

  public beers: DisplayValue<number>[] = [
    new DisplayValue('Schwechater', 0),
    new DisplayValue('Ottakringer', 1),
    new DisplayValue('Wieselburger', 2)
  ];

  public constructor(private fb: FormBuilder,
                     private hockeyDataIceHockeyService: HockeyDataIceHockeyService) {
    this.initForm();
  }

  public ngOnInit(): void {
    let control = this.shippingForm.get('country');

    if (control) {
      control.statusChanges.subscribe((s) => console.log(s));
    }

    this.getGameReport().then(report => {
      this.gameReport = report;
    });

    this.getTeamStandings(8136).then(standings => this.standings2 = standings);
    this.getTeamStandings(7818).then(standings => this.standings3 = standings);

    this.getKnockOutStage(8259).then(knockoutStage => {
      this.knockoutStage = knockoutStage;
      console.log(this.knockoutStage);
    });
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

    if (control) {
      control.setErrors({ server: true });
    }
  }

  public async getGameReport(): Promise<HockeyDataGameReport> {
    return await this.hockeyDataIceHockeyService.getGameReport('24352fe0-0ca3-4f99-80c0-ee22d55e6a56');
  }

  public async getTeamStandings(divisionId: number): Promise<HockeyDataTeamStanding[]> {
    return await this.hockeyDataIceHockeyService.getStandings(divisionId, true);
  }

  public async getKnockOutStage(divisionId: number): Promise<HockeyDataKnockoutStage> {
    return await this.hockeyDataIceHockeyService.getKnockoutStage(divisionId);
  }
}
