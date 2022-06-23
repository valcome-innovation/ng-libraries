export interface GoogleDeviceResponse {
  device_code: string;
  user_code: string;
  verification_url: string;
  expires_in: number;
  interval: number;
}

export type GooglePollResponse = {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
}
