import { SocialUser } from "../entities/social-user";

export interface DeviceCodeResponse {
  device_code: string;
  user_code: string;
  verification_url: string;
  expires_in: number;
  interval: number;
}

export type PolledUser = { type: 'user', user: SocialUser } | { type: 'empty' };
