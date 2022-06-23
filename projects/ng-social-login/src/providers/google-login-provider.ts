import { SocialProvider, SocialUser } from '../entities/social-user';
import { DomUtils } from '@valcome/ng-core';
import { LoginProvider } from '../entities/login-provider';
import { GoogleHelper } from '../helper/google.helper';
import { HttpClient } from '@angular/common/http';
import { DeviceCodeResponse, PolledUser } from '../types/social';
import { BehaviorSubject } from 'rxjs';
import { filter, skip, take } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';

export interface GoogleInitOptions {
  oneTapEnabled?: boolean;
  scopes?: string | string[];
}

const defaultInitOptions: GoogleInitOptions = {
  oneTapEnabled: false,
};

// https://github.com/abacritt/angularx-social-login/blob/e7f2020ad7ecb881d3ef3132ac90f0a3e2d2bada/projects/lib/src/providers/google-login-provider.ts
export class GoogleLoginProvider implements LoginProvider {

  public static readonly PROVIDER_ID: SocialProvider = 'GOOGLE';

  protected googleHelper: GoogleHelper;

  public readonly changeUser = new EventEmitter<SocialUser | null>();

  private readonly _socialUser = new BehaviorSubject<SocialUser | null>(null);
  private readonly _accessToken = new BehaviorSubject<string | null>(null);
  private readonly _receivedAccessToken = new EventEmitter<string | null>();
  private _tokenClient: google.accounts.oauth2.TokenClient | undefined;

  public constructor(private clientId: string,
                     clientTvId: string,
                     clientSecret: string,
                     http: HttpClient,
                     private readonly initOptions: GoogleInitOptions) {
    this.googleHelper = new GoogleHelper(clientTvId, clientSecret, http);
    this.initOptions = { ...defaultInitOptions, ...this.initOptions };

    // emit changeUser events but skip initial value from behaviorSubject
    this._socialUser.pipe(skip(1)).subscribe(this.changeUser);

    // emit receivedAccessToken but skip initial value from behaviorSubject
    this._accessToken.pipe(skip(1)).subscribe(this._receivedAccessToken);
  }

  public async initialize(autoLogin?: boolean): Promise<void> {
    const scriptTag = await DomUtils.loadScriptAsync(
      GoogleLoginProvider.PROVIDER_ID,
      'https://accounts.google.com/gsi/client'
    );

    if (scriptTag) {
      google.accounts.id.initialize({
        client_id: this.clientId,
        auto_select: autoLogin,
        callback: ({ credential }) => {
          const socialUser = this.googleHelper.createSocialUser(credential);
          this._socialUser.next(socialUser);
        },
      });

      if (this.initOptions.oneTapEnabled) {
        this._socialUser
          .pipe(filter((user) => user === null))
          .subscribe(() => google.accounts.id.prompt(console.debug));
      }

      if (this.initOptions.scopes) {
        const scope =
          this.initOptions.scopes instanceof Array
            ? this.initOptions.scopes.filter((s) => s).join(' ')
            : this.initOptions.scopes;

        this._tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: this.clientId,
          scope,
          callback: (tokenResponse) => {
            if (tokenResponse.error) {
              this._accessToken.error({
                code: tokenResponse.error,
                description: tokenResponse.error_description,
                uri: tokenResponse.error_uri,
              });
            } else {
              this._accessToken.next(tokenResponse.access_token);
            }
          },
        });
      }
    }
  }

  public getDeviceCode(): Promise<DeviceCodeResponse> {
    return this.googleHelper.fetchDeviceCode();
  }

  public async singlePollForDevice(deviceCodeResponse: DeviceCodeResponse): Promise<PolledUser> {
    const pollResponse = await this.googleHelper.fetchAccessCode(deviceCodeResponse.device_code).catch(err => err);

    if ('id_token' in pollResponse && 'access_token' in pollResponse) {
      const user = this.googleHelper.createSocialUserFromToken(pollResponse, 'GOOGLE');
      return { type: 'user', user };
    } else {
      return { type: 'empty' };
    }
  }

  public async getLoginStatus(refreshToken?: boolean): Promise<SocialUser> {
    return new Promise((resolve, reject) => {
      if (this._socialUser.value) {
        if (refreshToken) {
          google.accounts.id.revoke(this._socialUser.value.id, response => {
            if (response.error) {
              reject(response.error);
            }
            resolve(this._socialUser.value!);
          });
        } else {
          resolve(this._socialUser.value);
        }
      } else {
        reject(
          `No user is currently logged in with ${GoogleLoginProvider.PROVIDER_ID}`
        );
      }
    });
  }

  public getAccessToken(): Promise<string | null> {
    return new Promise((resolve, reject) => {
      if (!this._tokenClient) {
        if (this._socialUser.value) {
          reject(
            'No token client was instantiated, you should specify some scopes.'
          );
        } else {
          reject('You should be logged-in first.');
        }
      } else {
        this._tokenClient.requestAccessToken({
          hint: this._socialUser.value?.email,
        });
        this._receivedAccessToken.pipe(take(1)).subscribe(resolve);
      }
    });
  }

  public revokeAccessToken(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this._tokenClient) {
        reject(
          'No token client was instantiated, you should specify some scopes.'
        );
      } else if (!this._accessToken.value) {
        reject('No access token to revoke');
      } else {
        google.accounts.oauth2.revoke(this._accessToken.value, () => {
          this._accessToken.next(null);
          resolve();
        });
      }
    });
  }

  public async signOut(revoke?: boolean): Promise<any> {
    google.accounts.id.disableAutoSelect();
    this._socialUser.next(null);
  }
}
