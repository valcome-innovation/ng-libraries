import { GoogleTokenClaims, LoginType, SocialUser } from '../types/social-user';
import { GoogleDeviceResponse, GooglePollResponse } from '../types/google';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';

export class GoogleHelper {

  public constructor(private clientTvId: string,
                     private clientSecret: string,
                     private http: HttpClient) {
  }

  public fetchAccessCode(deviceCode: string): Promise<GooglePollResponse> {
    return this.http.post<GooglePollResponse>('https://oauth2.googleapis.com/token', {
      client_id: this.clientTvId,
      client_secret: this.clientSecret,
      scope: 'email profile',
      device_code: deviceCode,
      grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
    }).toPromise();
  }

  public fetchDeviceCode(): Promise<GoogleDeviceResponse> {
    return this.http.post<GoogleDeviceResponse>('https://oauth2.googleapis.com/device/code', {
      client_id: this.clientTvId,
      scope: 'email profile'
    }).toPromise();
  }

  public createSocialUser(idToken: string, accessToken: string | null, loginType: LoginType): SocialUser {
    const payload = jwtDecode<GoogleTokenClaims>(idToken);

    if (payload.sub && payload.email && accessToken) {
      return new SocialUser(
        'GOOGLE',
        loginType,
        payload.sub,
        payload.email,
        payload.name,
        payload.picture,
        payload.given_name,
        payload.family_name,
        accessToken,
        payload as unknown as GoogleTokenClaims
      );
    } else {
      throw new Error(`Payload did not contain minimum requirements: ${JSON.stringify(payload)}`);
    }
  }
}
