import { SocialUser } from './social-user';
import { DeviceCodeResponse, PolledUser } from '../types/social';
import { LoginOptionsWithFields } from '../types/facebook';
import { EventEmitter } from '@angular/core';

export type SignInOptions = LoginOptionsWithFields;

export interface LoginProvider {

  readonly changeUser?: EventEmitter<SocialUser | null>;

  initialize(): Promise<void>;

  getLoginStatus(): Promise<SocialUser>;

  signIn?(signInOptions?: SignInOptions): Promise<SocialUser>;

  signOut(revoke?: boolean): Promise<any>;

  getDeviceCode(): Promise<DeviceCodeResponse>;

  singlePollForDevice(deviceCodeResponse: DeviceCodeResponse): Promise<PolledUser>;
}
