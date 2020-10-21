import { FbUser, SocialProvider, SocialUser } from '../entities/social-user';
import { DomUtils } from '@valcome/ng-core';
import { LoginProvider } from '../entities/login-provider';
import { FacebookStatic, LoginOptions, StatusResponse } from '../types/facebook';

const defaultInitOptions = {
  scope: 'email,public_profile',
  locale: 'en_US',
  fields: 'name,email,picture,first_name,last_name',
  version: 'v4.0',
};

declare let FB: FacebookStatic;
export type LoginOptionsWithFields = LoginOptions & { fields: string };

export class FacebookLoginProvider implements LoginProvider {

  public static readonly PROVIDER_ID: SocialProvider = 'FACEBOOK';

  public constructor(private clientId: string,
                     private initOptions: typeof defaultInitOptions = defaultInitOptions) {
  }

  public async initialize(): Promise<void> {
    const scriptTag = await DomUtils.loadScriptAsync(`//connect.facebook.net/${this.initOptions.locale}/sdk.js`);
    scriptTag.id = FacebookLoginProvider.PROVIDER_ID;

    FB.init({
      appId: this.clientId,
      autoLogAppEvents: true,
      cookie: true,
      xfbml: true,
      version: this.initOptions.version,
    });
  }

  public getLoginStatus(): Promise<SocialUser> {
    return new Promise((resolve, reject) => {
      FB.getLoginStatus(({ status, authResponse }: StatusResponse) => {
        if (status === 'connected') {
          FB.api(`/me?fields=${this.initOptions.fields}`, (fbUser: FbUser) => {
            const user = this.createSocialUser(fbUser, authResponse.accessToken);
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
            const user = this.createSocialUser(fbUser, authResponse.accessToken);
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

  private createSocialUser(fbUser: FbUser, accessToken: string): SocialUser {
    return new SocialUser(
      FacebookLoginProvider.PROVIDER_ID,
      fbUser.id,
      fbUser.email,
      fbUser.name,
      `https://graph.facebook.com/${fbUser.id}/picture?type=normal`,
      fbUser.first_name,
      fbUser.last_name,
      accessToken,
      fbUser
    );
  }
}
