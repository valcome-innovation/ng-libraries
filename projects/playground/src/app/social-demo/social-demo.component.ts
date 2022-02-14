import { Component, OnInit } from '@angular/core';
import {
  DeviceCodeResponse,
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthFacade,
  SocialUser
} from '@valcome/ng-social-login';

@Component({
  selector: 'val-social-demo',
  templateUrl: './social-demo.component.html',
  styleUrls: ['./social-demo.component.css']
})
export class SocialDemoComponent implements OnInit {

  public user?: SocialUser;
  public areCookiesBlocked = false;

  public deviceCode?: DeviceCodeResponse;
  public remainingSeconds = 0;
  private pollingInterval: any;

  public constructor(private authService: SocialAuthFacade) {
  }

  public ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });
  }

  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public async signInWithGoogleOnTv(): Promise<void> {
    this.deviceCode = await this.authService.getDeviceCode('GOOGLE');
    this.remainingSeconds = this.deviceCode.expires_in;

    this.pollingInterval = setInterval(async () => {
      this.remainingSeconds--;

      if (this.remainingSeconds <= 0) {
        clearInterval(this.pollingInterval);
      }

      if (this.remainingSeconds % this.deviceCode!.interval === 0) {
        const { type } = await this.authService.pollForDevice('GOOGLE', this.deviceCode!);

        if (type === 'user') {
          clearInterval(this.pollingInterval);
        }
      }
    }, 1000);

  }

  public async signInWithFBTV(): Promise<void> {
    this.deviceCode = await this.authService.getDeviceCode('FACEBOOK');
  }

  public signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  public signOut(): void {
    this.authService.signOut();
  }
}
