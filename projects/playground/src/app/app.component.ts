import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DisplayValue } from 'ng-core';
import { FormErrorType } from 'projects/ng-elements/form/src/model/form-error-type';
import { Image } from '../../../ng-elements/image-gallery/src/image';
import { StringUtils } from '../../../ts-core/src/lib/utils/string-utils';
import { BaseFormComponent } from '../../../ng-elements/form/src/components/base-form.component';
import { ImageResizeService } from '../../../ng-image-resize/src/lib/image-resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent extends BaseFormComponent implements OnInit {

  // public logoMap: LogoMap = {
  //   VIC: "https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/VIC.png",
  //   DEC: "https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/DEC.png",
  //   AVS: "https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/AVS.png",
  //   HCI: "https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/HCI.png",
  //   G99: "https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/G99.png",
  //   BWI: "https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/BWI.png",
  //   RBS: "https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/RBS.png",
  //   HCB: "https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/HCB.png",
  //   BRC: "https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/BRC.png",
  //   VSV: "https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/VSV.png",
  //   KAC: "https://valcometv-media.s3.eu-central-1.amazonaws.com/images/teams/KAC.png"
  // }

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

  public form!: FormGroup;
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
                     private imageResizeService: ImageResizeService) {
    super();
    this.initForm();
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.form.get('firstName')!.enable({ emitEvent: false });
    }, 0);

    let control = this.form.get('country');

    if (control) {
      control.statusChanges.subscribe((s) => console.log(s));
    }

    // this.getGameReport().then(report => {
    //   this.gameReport = report;
    // });
    //
    // this.getTeamStandings(8136).then(standings => this.standings2 = standings);
    // this.getTeamStandings(7818).then(standings => this.standings3 = standings);
    //
    // this.getKnockOutStage(8259).then(knockoutStage => {
    //   this.knockoutStage = knockoutStage;
    //   console.log(this.knockoutStage);
    // });

    setInterval(() => {
      this.countries = [
        new DisplayValue('AT' + StringUtils.getUnderscoredUniqueString(), 'AT'),
        new DisplayValue('DE' + StringUtils.getUnderscoredUniqueString(), 'DE', true),
        new DisplayValue('UK' + StringUtils.getUnderscoredUniqueString(), 'UK')
      ]
    }, 3_000);
  }

  private initForm(): void {
    this.form = this.fb.group({
      firstName: ['', this.fbOptions([Validators.required], 'blur')],
    });
    // this.form = this.fb.group({
    //   eMail: ['', this.fbOptions([Validators.required])],
    //   firstName: ['', this.fbOptions([Validators.required], 'blur')],
    //   lastName: ['', this.fbOptions([Validators.required])],
    //   country: [null, this.fbOptions([Validators.required], 'change')],
    //   useDifferentBilling: [false, this.fbOptions([Validators.requiredTrue], 'change')],
    //   beer: [1, this.fbOptions([Validators.required], 'change')]
    // });
  }

  private fbOptions(validators: ValidatorFn[], updateOn: 'blur' | 'change' = 'blur'): AbstractControlOptions {
    return { validators, updateOn };
  }

  public submit(submit: HTMLInputElement, event: Event): boolean | Promise<any> {
    return super.submit(submit, event);
  }

  public setError(): void {
    let control = this.form.get('country');

    if (control) {
      control.setErrors({ server: true });
    }
  }

  //
  // public async getGameReport(): Promise<HockeyDataGameReport> {
  //   return await this.hockeyDataIceHockeyService.getGameReport('24352fe0-0ca3-4f99-80c0-ee22d55e6a56');
  // }
  //
  // public async getTeamStandings(divisionId: number): Promise<HockeyDataTeamStanding[]> {
  //   return await this.hockeyDataIceHockeyService.getStandings(divisionId, true);
  // }
  //
  // public async getKnockOutStage(divisionId: number): Promise<HockeyDataKnockoutStage> {
  //   return await this.hockeyDataIceHockeyService.getKnockoutStage(divisionId);
  // }

  public pickImage(event: any): void {
    const image = event.target.files[0];
    console.log('input');
    console.log(image);

    this.imageResizeService.resize([image], 100, 100).subscribe((result) => {
      console.log('observed');
      console.log(result);
    });

    this.imageResizeService.resizeSingle(image, 100, 100).then(result => {
      console.log('promised');
      console.log(result);
    });
  }
}
