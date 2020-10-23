import { HttpClient, HttpParams } from '@angular/common/http';
import { FacebookDeviceResponse, FacebookPollResponse } from '../types/facebook';
import { DeviceCodeResponse } from '../types/social';
import { FbUser, SocialProvider, SocialUser } from '../entities/social-user';

export class FacebookHelper {

  public constructor(private clientId: string,
                     private http: HttpClient) {
  }

  public fetchDeviceCode(): Promise<FacebookDeviceResponse> {
    return this.http.post<FacebookDeviceResponse>('https://graph.facebook.com/v2.6/device/login', {
      access_token: this.clientId,
      scope: 'public_profile'
    }).toPromise()
  }

  public fetchAccessCode(deviceCode: string): Promise<FacebookPollResponse> {
    return this.http.post<FacebookPollResponse>('https://graph.facebook.com/v2.6/device/login_status', {
      access_token: this.clientId,
      code: deviceCode
    }).toPromise()
  }

  public fetchProfile(fields: string, accessToken: string): Promise<FbUser> {
    let params = new HttpParams();
    params = params.append('fields', fields);
    params = params.append('access_token', accessToken);

    return this.http.get<FbUser>('https://graph.facebook.com/v2.3/me', { params })
      .toPromise();
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

  public createSocialUser(fbUser: FbUser, accessToken: string, provider: SocialProvider): SocialUser {
    return new SocialUser(
      provider,
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
