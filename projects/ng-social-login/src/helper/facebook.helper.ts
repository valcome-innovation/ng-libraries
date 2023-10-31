import { HttpClient, HttpParams } from '@angular/common/http';
import { FacebookDeviceResponse, FacebookPollResponse } from '../types/facebook';
import { DeviceCodeResponse } from '../types/social';
import { FbUser, LoginType, SocialUser } from '../types/social-user';

export class FacebookHelper {

  public constructor(private clientId: string,
                     private clientToken: string,
                     private http: HttpClient,
                     private apiVersion: string) {
  }

  public fetchDeviceCode(): Promise<FacebookDeviceResponse> {
    return this.http.post<FacebookDeviceResponse>(
      `https://graph.facebook.com/${this.apiVersion}/device/login`, {
        access_token: `${this.clientId}|${this.clientToken}`,
        scope: 'public_profile'
      }
    ).toPromise();
  }

  public fetchAccessCode(deviceCode: string): Promise<FacebookPollResponse> {
    return this.http.post<FacebookPollResponse>(
      `https://graph.facebook.com/${this.apiVersion}/device/login_status`, {
        access_token: `${this.clientId}|${this.clientToken}`,
        code: deviceCode
      }
    ).toPromise();
  }

  public fetchProfile(fields: string, accessToken: string): Promise<FbUser> {
    let params = new HttpParams();
    params = params.append('fields', fields);
    params = params.append('access_token', accessToken);

    return this.http.get<FbUser>(
      `https://graph.facebook.com/${this.apiVersion}/me`,
      { params }
    ).toPromise();
  }

  public mapFacebookCodeToDeviceCode(facebookCode: FacebookDeviceResponse): DeviceCodeResponse {
    const { expires_in, interval, user_code, code, verification_uri } = facebookCode;

    return {
      device_code: code,
      verification_url: verification_uri,
      user_code,
      interval,
      expires_in
    };
  }

  public createSocialUser(fbUser: FbUser, accessToken: string, loginType: LoginType): SocialUser {
    return new SocialUser(
      'FACEBOOK',
      loginType,
      fbUser.id,
      fbUser.email,
      fbUser.name,
      `https://graph.facebook.com/${fbUser.id}/picture?type=normal`,
      fbUser.first_name,
      fbUser.last_name,
      accessToken,
      fbUser
    );
  }
}
