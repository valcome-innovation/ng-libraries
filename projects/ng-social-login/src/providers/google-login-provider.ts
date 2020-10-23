import { SocialProvider, SocialUser } from '../entities/social-user';
import { DomUtils } from '@valcome/ng-core';
import { LoginProvider } from '../entities/login-provider';
import { GoogleHelper } from '../helper/google.helper';
import { HttpClient } from '@angular/common/http';
import { DeviceCodeResponse, PolledUser } from '../types/social';

const defaultInitOptions = { scope: 'email' };

export class GoogleLoginProvider implements LoginProvider {

  public static readonly PROVIDER_ID: SocialProvider = 'GOOGLE';

  protected auth2?: gapi.auth2.GoogleAuth;
  protected googleHelper: GoogleHelper;

  public constructor(private clientId: string,
                     clientTvId: string,
                     clientSecret: string,
                     http: HttpClient,
                     private initOptions: gapi.auth2.ClientConfig = defaultInitOptions) {
    this.googleHelper = new GoogleHelper(clientTvId, clientSecret, http);
  }

  public async initialize(): Promise<void> {
    const scriptTag = await DomUtils.loadScriptAsync('https://apis.google.com/js/platform.js');

    if (scriptTag) {
      scriptTag.id = GoogleLoginProvider.PROVIDER_ID;

      const params = {
        cookie_policy: 'none',
        client_id: this.clientId,
      };

      return new Promise((resolve, reject) => {
        gapi.load('auth2', () => {
          gapi.auth2.init(params).then(
            googleAuth => {
              this.auth2 = googleAuth;
              resolve()
            },
            reason => {
              reject(reason)
            }
          );
        });
      });
    }
  }

  public getDeviceCode(): Promise<DeviceCodeResponse> {
    return this.googleHelper.fetchDeviceCode();
  }

  public async singlePollForDevice(deviceCodeResponse: DeviceCodeResponse): Promise<PolledUser> {
    const pollResponse = await this.googleHelper.fetchAccessCode(deviceCodeResponse.device_code).catch(err => err);

    if ('access_token' in pollResponse) {
      const user = this.googleHelper.createSocialUserFromToken(pollResponse.access_token, 'GOOGLE_TV');
      return { type: 'user', user };
    } else {
      return { type: 'empty' };
    }
  }

  public async getLoginStatus(): Promise<SocialUser> {
    this.validateAuth()

    return new Promise((resolve, reject) => {
      const isSignedIn = this.auth2!.isSignedIn.get();
      const googleUser = isSignedIn ? this.auth2!.currentUser.get() : undefined;

      if (isSignedIn && googleUser) {
        resolve(this.googleHelper.createSocialUser(googleUser, 'GOOGLE'))
      } else {
        reject(`No user is currently logged in with ${GoogleLoginProvider.PROVIDER_ID}`);
      }
    });
  }

  public async signIn(signInOptions?: gapi.auth2.ClientConfig): Promise<SocialUser> {
    this.validateAuth();

    const options = { ...this.initOptions, ...signInOptions };
    const googleUser = await this.auth2!.signIn(options);

    return this.googleHelper.createSocialUser(googleUser, 'GOOGLE');
  }

  public async signOut(revoke?: boolean): Promise<any> {
    this.validateAuth()
    let signOutPromise: Promise<any>;

    if (revoke) {
      signOutPromise = this.auth2!.disconnect();
    } else {
      signOutPromise = this.auth2!.signOut();
    }

    const err = await signOutPromise;

    if (err) {
      throw new Error(err);
    }
  }

  private validateAuth(): void {
    if (!this.auth2) {
      throw new Error('Couldn\'t create Google Auth object');
    }
  }
}
