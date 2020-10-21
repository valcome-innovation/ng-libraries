import { SocialUser } from './social-user';
import { LoginOptionsWithFields } from '../providers/facebook-login-provider';

export type SignInOptions = LoginOptionsWithFields | gapi.auth2.ClientConfig;

export interface LoginProvider {
  initialize(): Promise<void>;

  getLoginStatus(): Promise<SocialUser>;

  signIn(signInOptions?: SignInOptions): Promise<SocialUser>;

  signOut(revoke?: boolean): Promise<any>;
}
