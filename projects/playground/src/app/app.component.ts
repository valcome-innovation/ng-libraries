import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractControlOptions, UntypedFormBuilder, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormErrorType } from 'projects/ng-elements/form/src/model/form-error-type';
import { Image } from '../../../ng-elements/image-gallery/src/image';
import { StringUtils } from '../../../ts-core/src/lib/utils/string-utils';
import { BaseFormComponent } from '../../../ng-elements/form/src/components/base-form.component';
import { ImageResizeService } from '../../../ng-image-resize/src/lib/image-resize.service';
import { DisplayValue } from '@valcome/ng-core';
import { HockeyDataIceHockeyService } from '../../../ts-hockeydata-api/src/lib/services/icehockey/contracts/hockey-data-ice-hockey.service';
import { GtagService } from '../../../ng-google-gtag/src/lib/gtag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent
  extends BaseFormComponent
  implements OnInit {

  @ViewChild('email', { static: true, read: ElementRef })
  public emailInput!: ElementRef<HTMLInputElement>;

  @ViewChild('password', { static: true, read: ElementRef })
  public passwordInput!: ElementRef<HTMLInputElement>;

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
  public switchCondition = false;
  public isSwitchLoading = false;

  public FormErrorType = FormErrorType;

  public form!: UntypedFormGroup;
  public isSubmitted = false;

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

  public constructor(private fb: UntypedFormBuilder,
                     private imageResizeService: ImageResizeService,
                     private hockeyData: HockeyDataIceHockeyService,
                     private gtagService: GtagService) {
    super();
    this.initForm();
  }

  public async ngOnInit(): Promise<void> {
    const data = await this.hockeyData.getSchedule(9032);

    // setTimeout(() => {
    //   this.form.get('firstName')!.enable({ emitEvent: false });
    // }, 0);

    const control = this.form.get('country');

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
      ];
    }, 3_000);
  }

  public async submit(submit: HTMLInputElement, event: Event): Promise<any> {
    return super.submit(submit, event);
  }

  public grantConsent(): void {
    this.gtagService.updateUserConsent('granted');
  }

  public denyConsent(): void {
    this.gtagService.updateUserConsent('denied');
  }

  public setError(): void {
    const control = this.form.get('country');

    if (control) {
      control.setErrors({ server: true });
    }
  }

  public simulateSwitchLoading(): void {
    this.isSwitchLoading = true;

    setTimeout(() => this.isSwitchLoading = false, 2_000);
  }

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

  private initForm(): void {
    // this.form = this.fb.group({
    //   firstName: ['', this.fbOptions([Validators.required], 'blur')],
    //   country: ['AT', this.fbOptions([Validators.required], 'blur')],
    // });
    this.form = this.fb.group({
      email: ['', this.fbOptions([Validators.required])],
      password: ['', this.fbOptions([Validators.required])],
      //   firstName: ['', this.fbOptions([Validators.required], 'blur')],
      //   lastName: ['', this.fbOptions([Validators.required])],
      //   country: [null, this.fbOptions([Validators.required], 'change')],
      //   useDifferentBilling: [false, this.fbOptions([Validators.requiredTrue], 'change')],
      //   beer: [1, this.fbOptions([Validators.required], 'change')]
    });
  }

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

  private fbOptions(validators: ValidatorFn[], updateOn: 'blur' | 'change' = 'blur'): AbstractControlOptions {
    return { validators, updateOn };
  }
}
