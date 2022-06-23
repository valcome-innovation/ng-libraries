import { GoogleTokenClaims, SocialProvider, SocialUser } from '../entities/social-user';
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

  public createSocialUser(idToken: string): SocialUser {
    const payload = this.decodeJwt(idToken);

    // TODO improve or check types of Google's Social User
    if (payload.sub && payload.email) {
      return new SocialUser(
        'GOOGLE',
        payload.sub,
        payload.email,
        payload.name!,
        payload.picture!,
        payload['given_name']!,
        payload['family_name']!,
        idToken,
        payload as unknown as GoogleTokenClaims
      );
    } else {
      throw new Error(`Payload did not contain minimum requirements: ${JSON.stringify(payload)}`);
    }
  }

  private decodeJwt(idToken: string): Record<string, string | undefined> {
    return JSON.parse(window.atob(idToken.split('.')[1]));
  }

  public createSocialUserFromToken({
                                     access_token,
                                     id_token
                                   }: GooglePollResponse, provider: SocialProvider): SocialUser {
    const tokenClaims = jwtDecode<GoogleTokenClaims>(id_token);

    return new SocialUser(
      provider,
      tokenClaims.sub,
      tokenClaims.email,
      tokenClaims.name,
      tokenClaims.picture,
      tokenClaims.given_name,
      tokenClaims.family_name,
      access_token,
      tokenClaims
    );
  }
}
