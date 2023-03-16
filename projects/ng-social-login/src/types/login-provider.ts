import { SocialUser } from './social-user';
import { DeviceCodeResponse, PolledUser } from './social';
import { LoginOptionsWithFields } from './facebook';
import { EventEmitter } from '@angular/core';
import { CookieConsent } from '@valcome/ng-core';

export type SignInOptions = LoginOptionsWithFields;

export interface LoginProvider {

  readonly changeUser?: EventEmitter<SocialUser | null>;

  initialize(defaultCookieConsent: CookieConsent): Promise<void>;

  getLoginStatus(): Promise<SocialUser>;

  signIn?(signInOptions?: SignInOptions): Promise<SocialUser>;

  signOut(revoke?: boolean): Promise<any>;

  getDeviceCode(): Promise<DeviceCodeResponse>;

  singlePollForDevice(deviceCodeResponse: DeviceCodeResponse): Promise<PolledUser>;

  setCookieConsent(consent: CookieConsent): void;
}
