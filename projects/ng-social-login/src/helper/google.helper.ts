import { GoogleTokenClaims, SocialProvider, SocialUser } from '../entities/social-user';
import * as JwtDecode from 'jwt-decode';
import { GoogleDeviceResponse, GooglePollResponse } from '../types/google';
import { HttpClient } from '@angular/common/http';

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

  public createSocialUser(googleUser: gapi.auth2.GoogleUser, provider: SocialProvider): SocialUser {
    const profile = googleUser.getBasicProfile();
    const token = googleUser.getAuthResponse(true).access_token;
    const backendToken = googleUser.getAuthResponse(true).id_token;

    const user = new SocialUser(
      provider,
      profile.getId(),
      profile.getEmail(),
      profile.getName(),
      profile.getImageUrl(),
      profile.getGivenName(),
      profile.getFamilyName(),
      token,
      profile
    );

    user.idToken = backendToken;

    return user;
  }

  public createSocialUserFromToken({ access_token, id_token }: GooglePollResponse, provider: SocialProvider): SocialUser {
    const tokenClaims = JwtDecode(id_token) as GoogleTokenClaims;

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
