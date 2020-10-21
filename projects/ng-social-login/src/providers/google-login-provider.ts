import { SocialProvider, SocialUser } from '../entities/social-user';
import { DomUtils } from '@valcome/ng-core';
import { LoginProvider } from '../entities/login-provider';

const defaultInitOptions = { scope: 'email' };
export type GoogleLoginResponse = { code: string } | gapi.auth2.GoogleUser;

export class GoogleLoginProvider implements LoginProvider {

  public static readonly PROVIDER_ID: SocialProvider = 'GOOGLE';
  protected auth2?: gapi.auth2.GoogleAuth;

  public constructor(private clientId: string,
                     private initOptions: gapi.auth2.ClientConfig = defaultInitOptions) {
  }

  public async initialize(): Promise<void> {
    const scriptTag = await DomUtils.loadScriptAsync('https://apis.google.com/js/platform.js');
    scriptTag.id = GoogleLoginProvider.PROVIDER_ID;

    return new Promise((resolve, reject) => {
      gapi.load('auth2', () => {
        gapi.auth2.init({
          ...this.initOptions,
          client_id: this.clientId,
        }).then(
          googleAuth => {
            this.auth2 = googleAuth;
            resolve()
          },
          reason => reject(reason)
        );
      });
    });
  }

  public async getLoginStatus(): Promise<SocialUser> {
    this.validateAuth()

    return new Promise((resolve, reject) => {
      const isSignedIn = this.auth2!.isSignedIn.get();
      const googleUser = isSignedIn ? this.auth2!.currentUser.get() : undefined;

      if (isSignedIn && googleUser) {
        resolve(this.createSocialUser(googleUser))
      } else {
        reject(`No user is currently logged in with ${GoogleLoginProvider.PROVIDER_ID}`);
      }
    });
  }

  public async signIn(signInOptions?: gapi.auth2.ClientConfig): Promise<SocialUser> {
    this.validateAuth()

    const options = { ...this.initOptions, ...signInOptions };
    const googleUser = await this.auth2!.signIn(options)
    return this.createSocialUser(googleUser);
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

  private createSocialUser(googleUser: gapi.auth2.GoogleUser): SocialUser {
    const profile = googleUser.getBasicProfile();
    const token = googleUser.getAuthResponse(true).access_token;
    const backendToken = googleUser.getAuthResponse(true).id_token;

    const user = new SocialUser(
      GoogleLoginProvider.PROVIDER_ID,
      profile.getId(),
      profile.getEmail(),
      profile.getName(),
      profile.getImageUrl(),
      profile.getGivenName(),
      profile.getFamilyName(),
      token,
      profile
    );

    user.idToken = backendToken;

    return user;
  }

  private validateAuth(): void {
    if (!this.auth2) {
      throw new Error('Couldn\'t create Google Auth object');
    }
  }
}
