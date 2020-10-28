import { FbUser, SocialProvider, SocialUser } from '../entities/social-user';
import { DomUtils } from '@valcome/ng-core';
import { LoginProvider } from '../entities/login-provider';
import { FacebookStatic, LoginOptionsWithFields, StatusResponse } from '../types/facebook';
import { DeviceCodeResponse, PolledUser } from '../types/social';
import { FacebookHelper } from '../helper/facebook.helper';
import { HttpClient } from '@angular/common/http';

const defaultInitOptions = {
  scope: 'email,public_profile',
  locale: 'en_US',
  fields: 'name,email,picture,first_name,last_name',
  version: 'v3.2',
};

declare let FB: FacebookStatic;

export class FacebookLoginProvider implements LoginProvider {

  public static readonly PROVIDER_ID: SocialProvider = 'FACEBOOK';
  protected facebookHelper: FacebookHelper;

  public constructor(private clientId: string,
                     clientToken: string,
                     http: HttpClient,
                     private initOptions: typeof defaultInitOptions = defaultInitOptions) {
    this.facebookHelper = new FacebookHelper(clientId, clientToken, http);
  }

  public async initialize(): Promise<void> {
    const scriptTag = await DomUtils.loadScriptAsync(`//connect.facebook.net/${this.initOptions.locale}/sdk.js`);

    if (scriptTag) {
      scriptTag.id = FacebookLoginProvider.PROVIDER_ID;

      FB.init({
        appId: this.clientId,
        autoLogAppEvents: true,
        cookie: true,
        xfbml: true,
        version: this.initOptions.version,
      });
    }
  }

  public getDeviceCode(): Promise<DeviceCodeResponse> {
    return this.facebookHelper.fetchDeviceCode()
      .then(this.facebookHelper.mapFacebookCodeToDeviceCode);
  }

  public async singlePollForDevice(deviceCodeResponse: DeviceCodeResponse): Promise<PolledUser> {
    const pollResponse = await this.facebookHelper.fetchAccessCode(deviceCodeResponse.device_code).catch(err => err);

    if ('access_token' in pollResponse) {
      const fbUser = await this.facebookHelper.fetchProfile(this.initOptions.fields, pollResponse.access_token);
      const user = this.facebookHelper.createSocialUser(fbUser, pollResponse.access_token, 'FACEBOOK_TV');
      return { type: 'user', user };
    } else {
      return { type: 'empty' };
    }
  }

  public getLoginStatus(): Promise<SocialUser> {
    return new Promise((resolve, reject) => {
      FB.getLoginStatus(({ status, authResponse }: StatusResponse) => {
        if (status === 'connected') {
          FB.api(`/me?fields=${this.initOptions.fields}`, (fbUser: FbUser) => {
            const user = this.facebookHelper.createSocialUser(fbUser, authResponse.accessToken, 'FACEBOOK');
            resolve(user);
          });
        } else {
          reject(`No user is currently logged in with ${FacebookLoginProvider.PROVIDER_ID}`);
        }
      });
    });
  }

  public signIn(signInOptions?: LoginOptionsWithFields): Promise<SocialUser> {
    const options = { ...this.initOptions, ...signInOptions };

    return new Promise((resolve, reject) => {
      FB.login(({ authResponse }: StatusResponse) => {
        if (authResponse) {
          FB.api(`/me?fields=${options.fields}`, (fbUser: FbUser) => {
            const user = this.facebookHelper.createSocialUser(fbUser, authResponse.accessToken, 'FACEBOOK');
            resolve(user);
          });
        } else {
          reject('User cancelled login or did not fully authorize.');
        }
      }, options);
    });
  }

  public signOut(): Promise<any> {
    return new Promise(resolve => FB.logout(() => resolve()));
  }
}
