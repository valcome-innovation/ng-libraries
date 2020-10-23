import { SocialUser } from './social-user';
import { LoginOptionsWithFields } from '../providers/facebook-login-provider';
import { DeviceCodeResponse, PolledUser } from '../types/social';

export type SignInOptions = LoginOptionsWithFields | gapi.auth2.ClientConfig;

export interface LoginProvider {
  initialize(): Promise<void>;

  getLoginStatus(): Promise<SocialUser>;

  signIn(signInOptions?: SignInOptions): Promise<SocialUser>;

  signOut(revoke?: boolean): Promise<any>;

  getDeviceCode(): Promise<DeviceCodeResponse>;

  singlePollForDevice(deviceCodeResponse: DeviceCodeResponse): Promise<PolledUser>;
}
