import { SocialUser } from '@valcome/ng-social-login';

export interface DeviceCodeResponse {
  device_code: string;
  user_code: string;
  verification_url: string;
  expires_in: number;
  interval: number;
}

export interface PollResponse {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
  refresh_token: string;
}

export type PolledUser = { type: 'user', user: SocialUser } | { type: 'empty' };
