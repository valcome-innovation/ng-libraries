import { SocialUser } from './social-user';
import { LoginOptionsWithFields } from '../providers/facebook-login-provider';

export interface LoginProvider {
  initialize(): Promise<void>;

  getLoginStatus(): Promise<SocialUser>;

  signIn(signInOptions?: LoginOptionsWithFields | gapi.auth2.ClientConfig): Promise<SocialUser>;

  signOut(revoke?: boolean): Promise<any>;
}
